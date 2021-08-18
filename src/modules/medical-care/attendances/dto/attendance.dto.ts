import { IsOptional, IsBoolean, IsDate, MaxLength } from 'class-validator';

export class AttendanceDto {
  @IsOptional()
  @MaxLength(512)
  readonly receptionInformation: string;

  @IsOptional()
  @IsDate()
  readonly arrivalDate: Date;

  @IsBoolean()
  readonly isActive: boolean;
}
