import { Container } from 'inversify';
import { RepositoryTypes } from '../repositories/types';
import { ServicesTypes } from '../services/types';
import { UserRepository } from '../repositories/UserRepository';
import { UserServices } from '../services/UserService';
import { AuthServices } from '../services/AuthServices';

const iocContainer = new Container();

iocContainer.bind<UserRepository>(RepositoryTypes.UserRepository).to(UserRepository);


iocContainer.bind<UserServices>(ServicesTypes.UserServices).to(UserServices);
iocContainer.bind<AuthServices>(ServicesTypes.AuthServices).to(AuthServices);

export { iocContainer };
