import { Inject, Injectable } from '@nestjs/common';
import { USER_TYPE_REPOSITORY } from 'src/core/constants';
import { UserTypeDto } from './dto/user-type.dto';
import { UserType } from './user-type.entity';

@Injectable()
export class UserTypesService {
  constructor(
    @Inject(USER_TYPE_REPOSITORY)
    private readonly userTypeRepository: typeof UserType,
  ) {}

  async create(userType: UserTypeDto): Promise<UserType> {
    return await this.userTypeRepository.create<UserType>(userType);
  }

  async findOneById(id: number): Promise<UserType> {
    return await this.userTypeRepository.findOne<UserType>({ where: { id } });
  }

  async findAll(): Promise<UserType[]> {
    return await this.userTypeRepository.findAll<UserType>();
  }

  async delete(id: number) {
    return await this.userTypeRepository.destroy({ where: { id } });
  }

  async update(id: number, data: UserTypeDto) {
    const [numberOfAffectedRows, [updatedUser]] =
      await this.userTypeRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedUser };
  }
}
