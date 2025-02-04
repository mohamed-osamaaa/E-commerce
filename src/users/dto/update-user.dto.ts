import { IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  roles?: string[];
}
