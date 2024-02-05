import { Response } from 'express';
import { captureException } from '@sentry/node';

import { CONSTANTS } from '@constants';

export const handleException = (methodName: string, exception: Error, res: Response, throwError = true) => {

  console.log(`Exception in method: ${methodName}:`, exception.message);

  captureException(exception);

  if (throwError) {
    res.status(CONSTANTS.STATUS.INTERNAL_SERVER_ERROR).json({ message: exception.message });
  }
};
