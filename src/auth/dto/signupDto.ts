import {
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidationOptions
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
