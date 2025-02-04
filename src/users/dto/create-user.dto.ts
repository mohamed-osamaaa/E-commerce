import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required and cannot be empty.' })
  name: string;

  @IsNotEmpty({ message: 'Email is required and cannot be empty.' })
  email: string;

  @IsNotEmpty({ message: 'Roles are required and cannot be empty.' })
  roles: string[];
}
