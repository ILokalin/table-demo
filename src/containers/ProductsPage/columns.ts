import { ATTRIBUTE_ACTIVE, ATTRIBUTE_NAME } from './model';
import { Data } from './index.d';

export const columns = [
  {
    name: 'Name',
    accessor: (value: Data ): string => value[ATTRIBUTE_NAME]
  },
  {
    name: 'Status',
    accessor: (value: Data): string => (value[ATTRIBUTE_ACTIVE] ? 'Active' : ''),
  }
]
