import { Module } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { UserTypesController } from './user-types.controller';
import { usersTypesProviders } from './user-types.providers';

@Module({
  providers: [UserTypesService, ...usersTypesProviders],
  controllers: [UserTypesController],
})
export class UserTypesModule {}
