import { ATTENDANCE_REPOSITORY } from 'src/core/constants';
import { Attendance } from './attendance.entity';

export const attendancesProviders = [
  {
    provide: ATTENDANCE_REPOSITORY,
    useValue: Attendance,
  },
];
