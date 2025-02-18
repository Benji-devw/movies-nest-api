import { Controller, Post, Body } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  signup(@Body() signupDto: SignupDto): string {
    return this.authService.signup(signupDto);
  }
}
