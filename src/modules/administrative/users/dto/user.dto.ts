import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsBoolean,
  IsOptional,
  MaxLength,
  IsDate,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @MaxLength(255)
  readonly name: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  readonly email: string;

  @IsNotEmpty()
  @IsDate()
  readonly birthday: Date;

  @IsNotEmpty()
  @MaxLength(15)
  readonly rg: string;

  @IsNotEmpty()
  @MaxLength(11)
  readonly cpf: string;

  @IsNotEmpty()
  @MaxLength(9)
  readonly zipCode: string;

  @IsNotEmpty()
  @MaxLength(255)
  readonly address: string;

  @IsNotEmpty()
  @MaxLength(20)
  readonly number: string;

  @IsNotEmpty()
  @MaxLength(255)
  readonly neighborhood: string;

  @IsNotEmpty()
  @MaxLength(100)
  readonly city: string;

  @IsNotEmpty()
  @MaxLength(25)
  readonly state: string;

  @IsOptional()
  @MaxLength(255)
  readonly complement: string;

  @IsOptional()
  @MaxLength(13)
  readonly telephone: string;

  @IsNotEmpty()
  @MaxLength(14)
  readonly cell: string;

  @IsBoolean()
  readonly isActive: boolean;
}