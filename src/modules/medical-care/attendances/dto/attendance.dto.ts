import {
  IsOptional,
  IsBoolean,
  IsDate,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';

export class AttendanceDto {
  @IsOptional()
  @MaxLength(512)
  readonly receptionInformation: string;

  @IsNotEmpty()
  @MaxLength(3)
  readonly patientAge: string;

  @IsNotEmpty()
  @IsDate()
  readonly arrivalDate: Date;

  @IsBoolean()
  readonly isSamu: boolean;

  @IsBoolean()
  readonly isActive: boolean;
}
