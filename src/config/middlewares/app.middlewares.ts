import { json, urlencoded, Application, NextFunction, Request, Response, ErrorRequestHandler, RequestHandler } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import { init, Handlers } from '@sentry/node';

import { CONSTANTS } from '@constants';
import { ENVIRONMENT } from '@environment';
import { MongoDB } from '../database/mongoose.connection';
import { handleException } from './../error-handler';
import { requestBodyHandler } from '.././request-body-handler';

export class Middlewares {
  constructor(app: Application) {
    this.init(app);
  }

  private init(app: Application) {

    this.initHelmet(app);

    this.initLogger(app);

    this.initBodyParser(app);

    this.connectToDatabase();

    this.setupAccessControlHeaders(app);

    this.initSentryErrorHandler(app);

    this.handleUncaughtErrors();

    this.initCompression(app);

  }

  initHelmet(app: Application) {
    app.use(helmet());
  }

  initLogger(app: Application) {
    app.use(morgan('dev'));
  }

  initBodyParser(app: Application) {
    app.use(json({ limit: CONSTANTS.BODY_PARSER_LIMIT }), requestBodyHandler);
    app.use(urlencoded({ limit: CONSTANTS.BODY_PARSER_LIMIT, extended: true }));
  }

  connectToDatabase() {
    new MongoDB(ENVIRONMENT.MONGODB_URL);
  }

  setupAccessControlHeaders(app: Application) {

    app.use((req: Request, res: Response, next: NextFunction) => {
      const ALLOWED_ORIGINS = [
        ENVIRONMENT.FRONT_END_URL,
        'http://www.evallo-assignment-api.com',
        'https://www.evallo-assignment-api.com',
      ];

      const origin: any = req.headers.origin;

      if (ALLOWED_ORIGINS.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Credentials', 'true');
      } else {
        res.header('Access-Control-Allow-Origin', '*');
      }
      // res.header('Access-Control-Max-Age', '300');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Requested-With, Authorization, source');
      next();
    });
  }
  initSentryErrorHandler(app: Application) {
    app.use(Handlers.errorHandler() as ErrorRequestHandler);
  }

  handleUncaughtErrors() {
    process.on('uncaughtException', (error: Error) => {
      handleException(
        'handleUncaughtErrors',
        new Error(`Server crashed due to this uncaughtException: ${error.message}`), null, false);
      process.exit(1);
    });

    process.on('unhandledRejection', (error: Error) => {
      handleException(
        'unhandledRejection',
        new Error(`Server crashed due to this unhandledRejection: ${error.message}`), null, false);
      process.exit(1);
    });
  }

  initCompression(app: Application) {
    app.use(compression());
  }
}
