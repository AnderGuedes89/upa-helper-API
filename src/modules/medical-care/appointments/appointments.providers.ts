import { APPOINTMENT_REPOSITORY } from 'src/core/constants';
import { Appointment } from './appointment.entity';

export const appointmentsProviders = [
  {
    provide: APPOINTMENT_REPOSITORY,
    useValue: Appointment,
  },
];
