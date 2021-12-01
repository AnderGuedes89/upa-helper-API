import {
  IsOptional,
  IsBoolean,
  MaxLength,
  IsInt,
  IsNotEmpty,
  IsDateString,
} from 'class-validator';

export class TriageDto {
  @IsOptional()
  @MaxLength(11)
  readonly bloodPressure: string;

  @IsOptional()
  @MaxLength(8)
  readonly temperature: string;

  @IsNotEmpty()
  @IsDateString()
  readonly triageDate: Date;

  @IsOptional()
  @MaxLength(5)
  readonly saturation: string;

  @IsOptional()
  @MaxLength(10)
  readonly bloodGlucose: string;

  @IsOptional()
  @MaxLength(6)
  readonly pulse: string;

  @IsOptional()
  @MaxLength(6)
  readonly respiratoryFrequency: string;

  @IsOptional()
  @MaxLength(9)
  readonly weight: string;

  @IsOptional()
  @MaxLength(6)
  readonly height: string;

  @IsOptional()
  @MaxLength(11)
  readonly imc: string;

  @IsOptional()
  @MaxLength(255)
  readonly preInformation: string;

  @IsOptional()
  @MaxLength(255)
  readonly medicines: string;

  @IsOptional()
  @MaxLength(255)
  readonly allergies: string;

  @IsOptional()
  @IsInt()
  readonly painIntensity: number;

  @IsNotEmpty()
  @IsInt()
  readonly riskRating: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly isPreferred: boolean;

  @IsOptional()
  @IsBoolean()
  readonly hasHypertension: boolean;

  @IsOptional()
  @IsBoolean()
  readonly hasDiabetes: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isSmoker: boolean;

  @IsOptional()
  @IsBoolean()
  readonly hasCancer: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isTransplanted: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;
}
