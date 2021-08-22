import {
  IsOptional,
  IsEnum,
  IsBoolean,
  IsDate,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';
import { EthnicityEnum } from 'src/core/enums/ethnicity.enum';
import { GenderEnum } from 'src/core/enums/gender.enum';

export class PatientDto {
  @IsOptional()
  @MaxLength(255)
  readonly name: string;

  @IsOptional()
  @MaxLength(255)
  readonly socialName: string;

  @IsOptional()
  @IsDate()
  readonly birthday: Date;

  @IsOptional()
  @MaxLength(15)
  readonly cns: string;

  @IsOptional()
  @MaxLength(15)
  readonly rg: string;

  @IsNotEmpty()
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
  @MaxLength(25)
  readonly state: string;

  @IsOptional()
  @MaxLength(255)
  readonly complement: string;

  @IsOptional()
  @MaxLength(13)
  readonly telephone: string;

  @IsOptional()
  @MaxLength(14)
  readonly cell: string;

  @IsOptional()
  @MaxLength(255)
  readonly fatherName: string;

  @IsOptional()
  @MaxLength(255)
  readonly motherName: string;

  @IsOptional()
  @IsEnum(EthnicityEnum, {
    message: 'A etnia deve ser branca, preta, parda, indígena ou amarela',
  })
  readonly ethnicity: EthnicityEnum;

  @IsOptional()
  @IsEnum(GenderEnum, {
    message: 'O gênero deve ser masculino ou feminino',
  })
  readonly gender: GenderEnum;

  @IsBoolean()
  readonly isActive: boolean;
}
