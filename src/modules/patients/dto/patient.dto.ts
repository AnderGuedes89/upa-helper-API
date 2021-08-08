import {
  IsOptional,
  IsEnum,
  IsBoolean,
  IsDate,
  MaxLength,
} from 'class-validator';

enum Gender {
  MALE = 'masculino',
  FEMALE = 'feminino',
}

enum Ethnicity {
  WHITE = 'branca',
  BLACK = 'preta',
  BROWN = 'parda',
  INDIGENOUS = 'indigena',
  YELLOW = 'amarela',
}

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

  @IsOptional()
  @MaxLength(11)
  readonly cpf: string;

  @IsOptional()
  @MaxLength(10)
  readonly zipCode: string;

  @IsOptional()
  readonly address: string;

  @IsOptional()
  @MaxLength(20)
  readonly number: string;

  @IsOptional()
  readonly neighborhood: string;

  @IsOptional()
  readonly city: string;

  @IsOptional()
  readonly state: string;

  @IsOptional()
  @MaxLength(255)
  readonly complement: string;

  @IsOptional()
  @MaxLength(14)
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
  @IsEnum(Ethnicity, {
    message: 'A etnia deve ser branca, preta, parda, indígena ou amarela',
  })
  readonly ethnicity: Ethnicity;

  @IsOptional()
  @IsEnum(Gender, {
    message: 'O gênero deve ser masculino ou feminino',
  })
  readonly gender: Gender;

  @IsBoolean()
  readonly isActive: boolean;
}
