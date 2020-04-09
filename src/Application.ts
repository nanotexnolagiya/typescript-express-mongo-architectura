import 'reflect-metadata';
import './controllers';
import { json, urlencoded } from 'body-parser';
import * as Debug from 'debug';
import * as express from 'express';
import * as createError from 'http-errors';
import * as logger from 'morgan';
import * as path from 'path';
import { connect } from 'mongoose';
import { Server } from './Server';
import { config } from './config';

const debug = Debug('app:server');

Server
  .setConfig((app: express.Application) => {
    app.use(logger('dev'));
    app.set('port', config.PORT);
    app.set('env', 'development');
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));
  })
  .setErrorConfig((app: express.Application) => {
    // catch 404 and forward to error handler
    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      next(createError(404));
    });

    // error handlers
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use((err: createError.HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(err.status || 500);
        res.json({
          error: err,
          message: err.message,
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use((err: createError.HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(err.status || 500);
      res.json({
        error: {},
        message: err.message,
      });
    });
  });

const Application = Server.build();

connect(
  config.MONGO_DB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    Application.listen(Application.get('port'), () => {
      debug(`App is running at http://localhost:${Application.get('port')} in ${Application.get('env')} mode`);
      debug('Press CTRL-C to stop');
    });
  })
  .catch(err => {
    debug(err.message);
  });

export { Application };
