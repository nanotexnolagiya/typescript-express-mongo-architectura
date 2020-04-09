import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { ServicesTypes } from '../services/types';
import { UserServices } from '../services/UserService';
import { BaseController } from './BaseController';

@controller('/users')
export class UserController extends BaseController {
  constructor(@inject(ServicesTypes.UserServices) private readonly userServices: UserServices) {super()}

  @httpGet('/')
  public async getAll() {
    const users = await this.userServices.getAll();
    return this.sendResponse(users);
  }
}
