import { Request, Response, Router } from 'express';

import { contentController } from './content.controller';
import { handleException } from '../../config/error-handler';

class ContentRoutes {

  private router: Router = Router();

  get routes() {

    this.router.get('/content', (req: Request, res: Response) => {
      contentController.getAllContent(req, res);
    });

    this.router.post('/content', (req: Request, res: Response) => {
      contentController.createContent(req, res);
    });

    return this.router;
  }
}

export const contentRoutes = new ContentRoutes();
