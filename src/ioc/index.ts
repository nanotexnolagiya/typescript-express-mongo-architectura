import { Container } from 'inversify';
import { RepositoryTypes } from '../repositories/types';
import { ServicesTypes } from '../services/types';
import { UserRepository } from '../repositories/UserRepository';
import { UserServices } from '../services/UserService';

const iocContainer = new Container();

iocContainer.bind<UserRepository>(RepositoryTypes.UserRepository).to(UserRepository);


iocContainer.bind<UserServices>(ServicesTypes.UserServices).to(UserServices);

export { iocContainer };
