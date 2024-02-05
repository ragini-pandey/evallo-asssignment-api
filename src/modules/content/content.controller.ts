import { Request, Response } from 'express';

import { CONSTANTS } from '@constants';
import { handleException } from '../../config/error-handler';
import { contentModel } from './content.model';

class ContentController {
  async createContent(req: Request, res: Response) {
    try {
      const content = await contentModel.create({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
      });

      res.status(CONSTANTS.STATUS.OK).json(content);
    } catch (e) {
      handleException('createContent', e, res);
    }
  }

  async getAllContent(req: Request, res: Response) {
    try {
      const allContents = await contentModel.find();

      res.status(CONSTANTS.STATUS.OK).json(allContents);
    } catch (e) {
      handleException('getAllContent', e, res);
    }
  }
}

export const contentController = new ContentController();
