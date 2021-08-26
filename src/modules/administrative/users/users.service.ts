import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneByCpf(cpf: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { cpf } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async findAllForTable(): Promise<any[]> {
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

  async delete(id: number) {
    return await this.userRepository.destroy({ where: { id } });
  }

  async update(id: number, data: UserDto) {
    const [numberOfAffectedRows, [updatedUser]] =
      await this.userRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedUser };
  }
}
