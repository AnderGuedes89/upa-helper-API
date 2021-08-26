import { IsNotEmpty, IsBoolean, MaxLength } from 'class-validator';

export class UserTypeDto {
  @IsNotEmpty()
  @MaxLength(100)
  readonly label: string;

  @IsBoolean()
  readonly isActive: boolean;
}
