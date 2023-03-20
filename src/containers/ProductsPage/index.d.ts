import { ATTRIBUTE_ACTIVE, ATTRIBUTE_CREATED_AT, ATTRIBUTE_ID, ATTRIBUTE_NAME } from './model';

export type Data = {
  [ATTRIBUTE_ID]: string;
  [ATTRIBUTE_NAME]: string;
  [ATTRIBUTE_ACTIVE]: boolean;
  [ATTRIBUTE_CREATED_AT]: string;
}
