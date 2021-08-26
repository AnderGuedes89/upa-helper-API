import { USER_TYPE_REPOSITORY } from 'src/core/constants';
import { UserType } from './user-type.entity';

export const usersTypesProviders = [
  {
    provide: USER_TYPE_REPOSITORY,
    useValue: UserType,
  },
];
