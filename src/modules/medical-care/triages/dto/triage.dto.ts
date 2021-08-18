import { IsOptional, IsBoolean, IsDate, MaxLength } from 'class-validator';

export class TriageDto {
  @IsOptional()
  @MaxLength(255)
  readonly bloodPressure: string;

  @IsOptional()
  @MaxLength(255)
  readonly temperature: string;

  @IsOptional()
  @IsDate()
  readonly triageDate: Date;

  @IsOptional()
  @MaxLength(15)
  readonly saturation: string;

  @IsOptional()
  @MaxLength(15)
  readonly bloodGlucose: string;

  @IsOptional()
  @MaxLength(11)
  readonly pulse: string;

  @IsOptional()
  @MaxLength(10)
  readonly respiratoryFrequency: string;

  @IsOptional()
  readonly weight: string;

  @IsOptional()
  @MaxLength(20)
  readonly height: string;

  @IsOptional()
  readonly preInformation: string;

  @IsOptional()
  readonly medicines: string;

  @IsOptional()
  readonly personalBackground: string;

  @IsOptional()
  @MaxLength(255)
  readonly pain: string;

  @IsOptional()
  @MaxLength(14)
  readonly riskRating: string;

  @IsBoolean()
  readonly isPreferred: boolean;

  @IsBoolean()
  readonly isActive: boolean;
}
