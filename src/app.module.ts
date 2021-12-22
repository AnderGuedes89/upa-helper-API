import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/administrative/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PatientsModule } from './modules/medical-care/patients/patients.module';
import { AttendancesModule } from './modules/medical-care/attendances/attendances.module';
import { TriagesModule } from './modules/medical-care/triages/triages.module';
import { APP_PIPE } from '@nestjs/core';
import { AppointmentsModule } from './modules/medical-care/appointments/appointments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    PatientsModule,
    AttendancesModule,
    TriagesModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
