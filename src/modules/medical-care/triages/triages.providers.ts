import { TRIAGE_REPOSITORY } from 'src/core/constants';
import { Triage } from './triage.entity';

export const triagesProviders = [
  {
    provide: TRIAGE_REPOSITORY,
    useValue: Triage,
  },
];
