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
  readonly name: string;

  @IsOptional()
  @MaxLength(255)
  readonly socialName: string;

  @IsOptional()
  @IsDateString()
  readonly birthday: Date;

  @IsOptional()
  @MaxLength(18)
  readonly cns: string;

  @IsOptional()
  @MaxLength(15)
  readonly rg: string;

  @IsOptional()
  @MaxLength(14)
  readonly cpf: string;

  @IsOptional()
  @MaxLength(9)
  readonly zipCode: string;

  @IsOptional()
  @MaxLength(255)
  readonly address: string;

  @IsOptional()
  @MaxLength(20)
  readonly number: string;

  @IsOptional()
  @MaxLength(255)
  readonly neighborhood: string;

  @IsOptional()
  @MaxLength(100)
  readonly city: string;

  @IsOptional()
  @MaxLength(2)
  readonly state: string;

  @IsOptional()
  @MaxLength(255)
  readonly complement: string;

  @IsOptional()
  @MaxLength(14)
  readonly telephone: string;

  @IsOptional()
  @MaxLength(15)
  readonly cell: string;

  @IsOptional()
  @MaxLength(255)
  readonly fatherName: string;

  @IsOptional()
  @MaxLength(255)
  readonly motherName: string;

  @IsNotEmpty()
  @IsInt()
  readonly genderId: number;

  @IsNotEmpty()
  @IsInt()
  readonly ethnicityId: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;
}
