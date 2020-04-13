import { controller, httpPost, requestBody } from 'inversify-express-utils';
import * as Joi from '@hapi/joi';
import { BAD_REQUEST } from '../config/http-status-codes';
import { BaseController } from './BaseController';
import { inject } from 'inversify';
import { ServicesTypes } from '../services/types';
import { AuthServices } from '../services/AuthServices';

@controller('/auth')
export class AuthController extends BaseController {
  constructor(@inject(ServicesTypes.AuthServices) private authServices: AuthServices) {
    super();
  }
  @httpPost('/login')
  public async login(@requestBody() reqBody: any) {
    const schema = Joi.object({
      phone: Joi.string().required(),
      password: Joi.string().required()
    })
    try {
      const { phone, password } = await schema.validateAsync(reqBody);
      const result = await this.authServices.login(phone, password);
      return this.sendResponse(result);
    } catch (error) {
      return this.sendResponse(error, BAD_REQUEST);
    }
  }
}
