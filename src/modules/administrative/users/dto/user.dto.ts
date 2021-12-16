import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsBoolean,
  IsOptional,
  MaxLength,
  IsDateString,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  @ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  readonly birthday: Date;

  @IsNotEmpty()
  @MaxLength(15)
  @ApiProperty()
  readonly rg: string;

  @IsNotEmpty()
  @MaxLength(14)
  @ApiProperty()
  readonly cpf: string;

  @IsNotEmpty()
  @MaxLength(9)
  @ApiProperty()
  readonly zipCode: string;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  readonly address: string;

  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty()
  readonly number: string;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  readonly neighborhood: string;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly city: string;

  @IsNotEmpty()
  @MaxLength(2)
  @ApiProperty()
  readonly state: string;

  @IsOptional()
  @MaxLength(255)
  @ApiPropertyOptional()
  readonly complement: string;

  @IsOptional()
  @MaxLength(14)
  @ApiPropertyOptional()
  readonly telephone: string;

  @IsNotEmpty()
  @MaxLength(15)
  @ApiProperty()
  readonly cell: string;

  @IsOptional()
  @MaxLength(20)
  @ApiPropertyOptional()
  readonly council: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  readonly isActive: boolean;
}
