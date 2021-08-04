import { IsNotEmpty, IsEnum, IsBoolean } from 'class-validator';

enum Gender {
  MALE = 'masculino',
  FEMALE = 'feminino',
}

enum Ethnicity {
  WHITE = 'branca',
  BLACK = 'preta',
  BROWN = 'parda',
  INDIGENOUS = 'indígena',
  YELLOW = 'amarela',
}

export class PatientDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly socialName: string;

  @IsNotEmpty()
  readonly birthday: Date;

  @IsNotEmpty()
  readonly cns: string;

  @IsNotEmpty()
  readonly rg: string;

  @IsNotEmpty()
  readonly cpf: string;

  @IsNotEmpty()
  readonly zipCode: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly number: string;

  @IsNotEmpty()
  readonly neighborhood: string;

  @IsNotEmpty()
  readonly city: string;

  @IsNotEmpty()
  readonly state: string;

  @IsNotEmpty()
  readonly complement: string;

  @IsNotEmpty()
  readonly telephone: string;

  @IsNotEmpty()
  readonly cell: string;

  @IsNotEmpty()
  readonly fatherName: string;

  @IsNotEmpty()
  readonly motherName: string;

  @IsNotEmpty()
  @IsEnum(Ethnicity, {
    message: 'A etnia deve ser branca, preta, parda, indígena ou amarela',
  })
  readonly ethnicity: Ethnicity;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'O gênero deve ser masculino ou feminino',
  })
  readonly gender: Gender;

  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;
}
