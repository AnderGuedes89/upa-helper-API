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
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
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
  @MaxLength(10)
  readonly zipCode: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  @MaxLength(20)
  readonly number: string;

  @IsNotEmpty()
  readonly neighborhood: string;

  @IsNotEmpty()
  readonly city: string;

  @IsNotEmpty()
  readonly state: string;

  @IsOptional()
  @MaxLength(255)
  readonly complement: string;

  @IsOptional()
  @MaxLength(14)
  readonly telephone: string;

  @IsNotEmpty()
  @MaxLength(14)
  readonly cell: string;

  @IsBoolean()
  readonly isActive: boolean;
}
