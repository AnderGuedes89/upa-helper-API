import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/administrative/users/user.entity';
import { Attendance } from 'src/modules/medical-care/attendances/attendance.entity';
import { Patient } from 'src/modules/medical-care/patients/patient.entity';
import { Triage } from 'src/modules/medical-care/triages/triage.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { Ethnicity } from '../entities/ethnicity.entity';
import { Gender } from '../entities/gender.entity';
import { PainIntensity } from '../entities/pain-intensity.entity';
import { RiskRating } from '../entities/risk-rating.entity';
import { UserType } from '../entities/user-type.entity';
import { databaseConfig } from './database.config';

function insertInitialData() {
  UserType.bulkCreate([
    { label: 'Administrador(a) de Rede de Informação' },
    { label: 'Médico(a)' },
    { label: 'Enfermeiro(a)' },
    { label: 'Técnico de Enfermagem' },
    { label: 'Auxiliar Administrativo' },
    { label: 'Técnico em Radiologia' },
    { label: 'Técnico de Laboratório' },
    { label: 'Farmacêutico(a)' },
    { label: 'Diretor(a)' },
    { label: 'Coordenador(a)' },
    { label: 'Assistente de Serviços Gerais' },
    { label: 'Auxiliar de TI' },
  ]);
  Ethnicity.bulkCreate([
    { label: 'Branca' },
    { label: 'Preta' },
    { label: 'Parda' },
    { label: 'Indígena' },
    { label: 'Amarela' },
  ]);
  Gender.bulkCreate([{ label: 'Masculino' }, { label: 'Feminino' }]);
  RiskRating.bulkCreate([
    { label: 'Azul' },
    { label: 'Verde' },
    { label: 'Amarelo' },
    { label: 'Laranja' },
    { label: 'Vermelho' },
  ]);
  PainIntensity.bulkCreate([
    { label: 'Dor Leve' },
    { label: 'Dor Moderada' },
    { label: 'Dor Intensa' },
    { label: 'Sem Dor' },
  ]);
}

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
      ]);
      await sequelize.sync();
      insertInitialData();
      return sequelize;
    },
  },
];
