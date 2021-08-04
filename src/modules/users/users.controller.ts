import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const post = await this.usersService.findOneById(id);

    if (!post) {
      throw new NotFoundException('Este usuário não existe');
    }

    return post;
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    const { numberOfAffectedRows, updatedPost }: any =
      await this.usersService.update(id, user);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Este paciente não existe');
    }

    return updatedPost;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.usersService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException('Este usuário não existe');
    }

    return 'Excluído com sucesso';
  }
}
