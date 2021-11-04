import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/administrative/users/user.entity';
import { Attendance } from 'src/modules/medical-care/attendances/attendance.entity';
import { Patient } from 'src/modules/medical-care/patients/patient.entity';
import { Triage } from 'src/modules/medical-care/triages/triage.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { AttendanceStatus } from '../entities/attendance-status.entity';
import { Ethnicity } from '../entities/ethnicity.entity';
import { Gender } from '../entities/gender.entity';
import { PainIntensity } from '../entities/pain-intensity.entity';
import { RiskRating } from '../entities/risk-rating.entity';
import { UserType } from '../entities/user-type.entity';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        Patient,
        Attendance,
        Triage,
        UserType,
        Ethnicity,
        Gender,
        RiskRating,
        PainIntensity,
        AttendanceStatus,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
