import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async createUser(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async getUserByCpf(cpf: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { cpf } });
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async getUsersForTable(): Promise<any[]> {
    const allUser = await this.userRepository.findAll<User>({
      include: ['userType'],
    });
    const userForTable = allUser.map((a) => ({
      id: a.id,
      name: a.name,
      userType: a.userType.label,
      cell: a.cell,
    }));
    return userForTable;
  }

  async updateUser(id: number, data: UserDto) {
    const [numberOfAffectedRows, [updatedUser]] =
      await this.userRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedUser };
  }
}
