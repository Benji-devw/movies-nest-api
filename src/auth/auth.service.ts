import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';

@Injectable()
export class AuthService {
  signup(signupDto: SignupDto): string {
    // Check if the user already exists
    // Hash the password
    // Create the user
    // Return the user
    throw new Error('Method not implemented.');
  }
}
