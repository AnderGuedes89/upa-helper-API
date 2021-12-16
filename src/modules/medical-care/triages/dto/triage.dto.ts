import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
  @ApiPropertyOptional()
  readonly bloodPressure: string;

  @IsOptional()
  @MaxLength(8)
  @ApiPropertyOptional()
  readonly temperature: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  readonly triageDate: Date;

  @IsOptional()
  @MaxLength(5)
  @ApiPropertyOptional()
  readonly saturation: string;

  @IsOptional()
  @MaxLength(10)
  @ApiPropertyOptional()
  readonly bloodGlucose: string;

  @IsOptional()
  @MaxLength(6)
  @ApiPropertyOptional()
  readonly pulse: string;

  @IsOptional()
  @MaxLength(6)
  @ApiPropertyOptional()
  readonly respiratoryFrequency: string;

  @IsOptional()
  @MaxLength(9)
  @ApiPropertyOptional()
  readonly weight: string;

  @IsOptional()
  @MaxLength(6)
  @ApiPropertyOptional()
  readonly height: string;

  @IsOptional()
  @MaxLength(11)
  @ApiPropertyOptional()
  readonly imc: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly preInformation: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly medicines: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly allergies: string;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional()
  readonly painIntensityId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly riskRatingId: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  readonly isPreferred: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasHypertension: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasDiabetes: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isSmoker: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasCancer: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isTransplanted: boolean;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly attendanceId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly userId: number;
}
