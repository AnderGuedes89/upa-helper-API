import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
  @ApiPropertyOptional()
  readonly receptionInformation: string;

  @IsOptional()
  @MaxLength(3)
  @ApiPropertyOptional()
  readonly patientAge: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  readonly arrivalDate: Date;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  readonly isSamu: boolean;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly patientId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly statusId: number;
}
