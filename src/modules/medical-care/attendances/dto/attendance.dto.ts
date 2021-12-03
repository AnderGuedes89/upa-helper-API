import {
  IsOptional,
  IsBoolean,
  MaxLength,
  IsNotEmpty,
  IsDateString,
  IsInt,
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
  @IsInt()
  readonly patientId: number;

  @IsNotEmpty()
  @IsInt()
  readonly statusId: number;
}
