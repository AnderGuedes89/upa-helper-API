import { Inject, Injectable } from '@nestjs/common';
import { TRIAGE_REPOSITORY } from 'src/core/constants';
import { TriageDto } from './dto/triage.dto';
import { Triage } from './triage.entity';

@Injectable()
export class TriagesService {
  constructor(
    @Inject(TRIAGE_REPOSITORY)
    private readonly triageRepository: typeof Triage,
  ) {}

  async create(triage: TriageDto): Promise<Triage> {
    return await this.triageRepository.create<Triage>(triage);
  }

  async findAll(): Promise<Triage[]> {
    return await this.triageRepository.findAll<Triage>();
  }

  async findOneById(id: number): Promise<Triage> {
    return await this.triageRepository.findOne({ where: { id } });
  }

  async delete(id: number) {
    return await this.triageRepository.destroy({ where: { id } });
  }

  async update(id: number, data: TriageDto) {
    const [numberOfAffectedRows, [updatedTriage]] =
      await this.triageRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedTriage };
  }
}
