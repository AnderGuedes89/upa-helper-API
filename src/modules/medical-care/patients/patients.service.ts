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

  async createPatient(patient: PatientDto): Promise<Patient> {
    return await this.patientRepository.create<Patient>(patient);
  }

  async getPatientsForTable(): Promise<Patient[]> {
    return await this.patientRepository.findAll<Patient>({
      include: ['ethnicity', 'gender'],
    });
  }

  async getPatientById(id: number): Promise<Patient> {
    return await this.patientRepository.findOne({
      where: { id },
      include: ['ethnicity', 'gender'],
    });
  }

  async getPatientByCpf(cpf: string): Promise<Patient> {
    return await this.patientRepository.findOne<Patient>({
      where: { cpf },
      include: ['ethnicity', 'gender'],
    });
  }

  async updatePatient(id: number, data: PatientDto) {
    const [numberOfAffectedRows, [updatedPatient]] =
      await this.patientRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedPatient };
  }
}
