import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { UserDto } from '../administrative/users/dto/user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'Faz login na aplicação' })
  async login(@Request() req) {
    return await this.authService.login(req.body);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  @ApiOperation({ summary: 'Cadastra um novo Usuário/Funcionário' })
  async signUp(@Body() user: UserDto) {
    return await this.authService.createUser(user);
  }
}
