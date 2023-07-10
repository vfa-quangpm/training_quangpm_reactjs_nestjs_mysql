import {
	BadRequestException,
	Body,
	Controller,
	Post,
	Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterDto } from './dto/auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	// Login user
	@Post('login')
	async logIn(@Body() dto: LoginUserDto, @Res() res: Response) {
		const access_token = await this.authService.logIn(dto);
		return res.json({
			message: 'Successfully!',
			access_token,
		});
	}

	// Register USer
	@Post('register')
	async register(@Body() dto: RegisterDto, @Res() res: Response) {
		await this.authService.register(dto);
		return res.json({
			message: 'Successfully!',
		});
	}
}
