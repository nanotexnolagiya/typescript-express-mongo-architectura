import { NextFunction, Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { ServicesTypes } from '../services/types';
import { UserServices } from '../services/UserService';

@controller('/users')
export class UserController {
  constructor(@inject(ServicesTypes.UserServices) private readonly userServices: UserServices) {}

  @httpGet('/')
  public async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await this.userServices.getAll();
    return res.json(users);
  }
}
