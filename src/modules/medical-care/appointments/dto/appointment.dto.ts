import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  MaxLength,
  IsNotEmpty,
  IsDateString,
  IsInt,
} from 'class-validator';

export class AppointmentDto {
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
  readonly appointmentDate: Date;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly attendanceId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly triageId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly userId: number;
}
