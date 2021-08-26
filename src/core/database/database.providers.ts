import { Sequelize } from 'sequelize-typescript';
import { UserType } from 'src/modules/administrative/user-types/user-type.entity';
import { User } from 'src/modules/administrative/users/user.entity';
import { Attendance } from 'src/modules/medical-care/attendances/attendance.entity';
import { Patient } from 'src/modules/medical-care/patients/patient.entity';
import { Triage } from 'src/modules/medical-care/triages/triage.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
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
      sequelize.addModels([User, Patient, Attendance, Triage, UserType]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
