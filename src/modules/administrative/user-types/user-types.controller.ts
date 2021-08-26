import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserTypeDto } from './dto/user-type.dto';
import { UserType } from './user-type.entity';
import { UserTypesService } from './user-types.service';

@Controller('user-types')
export class UserTypesController {
  constructor(private readonly userTypesService: UserTypesService) {}

  // @UseGuards(AuthGuard('jwt'))
  // @UseGuards(DoesPatientExist)
  @Post()
  async create(@Body() patient: UserTypeDto): Promise<UserType> {
    return await this.userTypesService.create(patient);
  }

  @Get()
  async findAll() {
    return await this.userTypesService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<UserType> {
    const userType = await this.userTypesService.findOneById(id);

    if (!userType) {
      throw new NotFoundException('Esse tipo de usuário não existe');
    }

    return userType;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userType: UserTypeDto,
  ): Promise<UserType> {
    const { numberOfAffectedRows, updatedUserType }: any =
      await this.userTypesService.update(id, userType);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Esse tipo de usuário não existe');
    }

    return updatedUserType;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.userTypesService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException('Este tipo de usuário não existe');
    }

    return 'Excluído com sucesso';
  }
}
