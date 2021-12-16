import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsBoolean,
  MaxLength,
  IsDateString,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class PatientDto {
  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly name: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly socialName: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional()
  readonly birthday: Date;

  @IsOptional()
  @MaxLength(18)
  @ApiPropertyOptional()
  readonly cns: string;

  @IsOptional()
  @MaxLength(15)
  @ApiPropertyOptional()
  readonly rg: string;

  @IsOptional()
  @MaxLength(14)
  @ApiPropertyOptional()
  readonly cpf: string;

  @IsOptional()
  @MaxLength(9)
  @ApiPropertyOptional()
  readonly zipCode: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly address: string;

  @IsOptional()
  @MaxLength(20)
  @ApiPropertyOptional()
  readonly number: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly neighborhood: string;

  @IsOptional()
  @MaxLength(100)
  @ApiPropertyOptional()
  readonly city: string;

  @IsOptional()
  @MaxLength(2)
  @ApiPropertyOptional()
  readonly state: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly complement: string;

  @IsOptional()
  @MaxLength(14)
  @ApiPropertyOptional()
  readonly telephone: string;

  @IsOptional()
  @MaxLength(15)
  @ApiPropertyOptional()
  readonly cell: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly fatherName: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly motherName: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly genderId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly ethnicityId: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  readonly isActive: boolean;
}
