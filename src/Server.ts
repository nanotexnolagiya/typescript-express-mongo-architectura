
import { InversifyExpressServer } from 'inversify-express-utils';
import { iocContainer } from './ioc';

export const Server = new InversifyExpressServer(iocContainer, null, { rootPath: '/api/v1' });
