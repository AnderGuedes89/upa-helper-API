import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { PatientsService } from 'src/modules/medical-care/patients/patients.service';

@Injectable()
export class DoesPatientExist implements CanActivate {
  constructor(private readonly patientsService: PatientsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const isExist = await this.patientsService.findOneByCpf(request.body.cpf);
    if (isExist) {
      throw new ForbiddenException('Já existe um paciente com esse CPF');
    }
    return true;
  }
}
