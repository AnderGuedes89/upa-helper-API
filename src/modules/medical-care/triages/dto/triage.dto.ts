import {
  IsOptional,
  IsBoolean,
  IsDate,
  MaxLength,
  IsEnum,
} from 'class-validator';
import { PainIntensityEnum } from 'src/core/enums/pain-intensity.enum';
import { RiskRatingEnum } from 'src/core/enums/risk-rating.enum';

export class TriageDto {
  @IsOptional()
  @MaxLength(11)
  readonly bloodPressure: string;

  @IsOptional()
  @MaxLength(7)
  readonly temperature: string;

  @IsOptional()
  @IsDate()
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
  @MaxLength(255)
  readonly preInformation: string;

  @IsOptional()
  @MaxLength(255)
  readonly medicines: string;

  @IsOptional()
  @MaxLength(255)
  readonly personalBackground: string;

  @IsOptional()
  @IsEnum(PainIntensityEnum)
  readonly painIntensity: PainIntensityEnum;

  @IsOptional()
  @IsEnum(RiskRatingEnum)
  readonly riskRating: RiskRatingEnum;

  @IsBoolean()
  readonly isPreferred: boolean;

  @IsBoolean()
  readonly isActive: boolean;
}
