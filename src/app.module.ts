import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/administrative/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PatientsModule } from './modules/medical-care/patients/patients.module';
import { AttendancesModule } from './modules/medical-care/attendances/attendances.module';
import { TriagesModule } from './modules/medical-care/triages/triages.module';
import { UserTypesModule } from './modules/administrative/user-types/user-types.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    PatientsModule,
    AttendancesModule,
    TriagesModule,
    UserTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
