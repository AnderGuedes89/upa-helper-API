import { Inject, Injectable } from '@nestjs/common';
import { ATTENDANCE_REPOSITORY, TRIAGE_REPOSITORY } from 'src/core/constants';
import { Attendance } from '../attendances/attendance.entity';
import { TriageDto } from './dto/triage.dto';
import { Triage } from './triage.entity';

@Injectable()
export class TriagesService {
  constructor(
    @Inject(TRIAGE_REPOSITORY) private readonly triageRepository: typeof Triage,
    @Inject(ATTENDANCE_REPOSITORY)
    private readonly attendanceRepository: typeof Attendance,
  ) {}

  async create(triage: TriageDto): Promise<Triage> {
    const attendanceId = triage.attendanceId;
    const attendance = await this.attendanceRepository.findOne({
      where: { id: attendanceId },
    });

    delete attendance.id;
    delete attendance.statusId;
    const newStatusId = 2;

    await this.attendanceRepository.update(
      { ...attendance, statusId: newStatusId },
      { where: { id: attendanceId } },
    );

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
