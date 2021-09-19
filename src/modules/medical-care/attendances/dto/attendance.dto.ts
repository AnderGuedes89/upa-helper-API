import {
  IsOptional,
  IsBoolean,
  MaxLength,
  IsNotEmpty,
  IsDateString,
} from 'class-validator';

export class AttendanceDto {
  @IsOptional()
  @MaxLength(512)
  readonly receptionInformation: string;

  @IsOptional()
  @MaxLength(3)
  readonly patientAge: string;

  @IsNotEmpty()
  @IsDateString()
  readonly arrivalDate: Date;

  @IsNotEmpty()
  @IsBoolean()
  readonly isSamu: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;
}
