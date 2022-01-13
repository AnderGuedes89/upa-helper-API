import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  MaxLength,
  IsNotEmpty,
  IsDateString,
  IsInt,
} from 'class-validator';

export class AppointmentDto {
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  readonly diagnosis: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly prescription: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly cid: string;

  @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty()
  readonly exitData: string;

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
  readonly userId: number;
}
