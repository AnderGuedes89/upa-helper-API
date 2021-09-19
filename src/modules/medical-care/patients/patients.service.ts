import { Inject, Injectable } from '@nestjs/common';
import { PATIENT_REPOSITORY } from 'src/core/constants';
import { PatientDto } from './dto/patient.dto';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: typeof Patient,
  ) {}

  async create(patient: PatientDto): Promise<Patient> {
    return await this.patientRepository.create<Patient>(patient);
  }

  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.findAll<Patient>({
      include: ['ethnicity', 'gender'],
    });
  }

  async findOneById(id: number): Promise<Patient> {
    return await this.patientRepository.findOne({
      where: { id },
      include: ['ethnicity', 'gender'],
    });
  }

  async findOneByCpf(cpf: string): Promise<Patient> {
    return await this.patientRepository.findOne<Patient>({
      where: { cpf },
      include: ['ethnicity', 'gender'],
    });
  }

  async delete(id: number) {
    return await this.patientRepository.destroy({ where: { id } });
  }

  async update(id: number, data: PatientDto) {
    const [numberOfAffectedRows, [updatedPatient]] =
      await this.patientRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedPatient };
  }
}
