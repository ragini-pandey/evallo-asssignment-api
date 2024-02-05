import { model, Schema } from 'mongoose';

import { CONSTANTS } from '@constants';
import { IUser } from './content.interfaces';

const contentSchema: Schema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    link: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
  },
  {
    collection: CONSTANTS.DATABASE_COLLECTIONS.CONTENT,
    timestamps: true,
  },
);

export const contentModel = model<IUser>('contentModel', contentSchema);
