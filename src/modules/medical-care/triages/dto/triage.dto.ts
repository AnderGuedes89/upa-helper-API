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
  @MaxLength(7)
  readonly temperature: string;

  @IsNotEmpty()
  @IsDateString()
  readonly triageDate: Date;

  @IsOptional()
  @MaxLength(10)
  readonly saturation: string;

  @IsOptional()
  @MaxLength(10)
  readonly bloodGlucose: string;

  @IsOptional()
  @MaxLength(10)
  readonly pulse: string;

  @IsOptional()
  @MaxLength(10)
  readonly respiratoryFrequency: string;

  @IsOptional()
  @MaxLength(10)
  readonly weight: string;

  @IsOptional()
  @MaxLength(10)
  readonly height: string;

  @IsOptional()
  @MaxLength(10)
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

  @IsNotEmpty()
  @IsBoolean()
  readonly hasHypertension: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly hasDiabetes: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isSmoker: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly hasCancer: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isTransplanted: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;
}
