import { Request, Response, Router } from 'express';

import { CONSTANTS } from '@constants';
import { contentRoutes } from '@modules/content/content.routes';

export class BackendRoutes {

  constructor(router: Router) {
    this.init(router);
    this.initModuleRoutes(router);
    this.init404Routes(router);
  }
  private init(router: Router) {
    router.get('/', (req: Request, res: Response) => {
      res.json({ message: CONSTANTS.MESSAGES.API_WORKING });
    });
  }

  private initModuleRoutes(router: Router) {
    router.use('/', contentRoutes.routes);
  }

  private init404Routes(router: Router) {
    router.use((req: Request, res: Response) => {
      res.status(CONSTANTS.STATUS.NOT_FOUND).json({ message: CONSTANTS.MESSAGES.ENDPOINT_NOT_FOUND });
    });
  }

}
