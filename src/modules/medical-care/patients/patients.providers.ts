import { PATIENT_REPOSITORY } from 'src/core/constants';
import { Patient } from './patient.entity';

export const patientsProviders = [
  {
    provide: PATIENT_REPOSITORY,
    useValue: Patient,
  },
];
