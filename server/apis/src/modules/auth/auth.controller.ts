import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Request,
	Response,
	UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AtGuard } from './guards/at-auth.guard';
import { RtGuard } from './guards/rt-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	// Login user
	@UseGuards(LocalAuthGuard)
	@Post('login')
	@HttpCode(HttpStatus.OK)
	async login(@Request() req, @Response() res) {
		const data = await this.authService.logIn(req.user);
		return res.json({ data, success: true });
	}
	// Logout user
	@UseGuards(AtGuard)
	@Get('logout')
	@HttpCode(HttpStatus.OK)
	async logout(@Request() req, @Response() res) {
		await this.authService.logout(req.user);
		return res.json({ success: true });
	}
	//Refresh Token
	@UseGuards(RtGuard)
	@Get('refresh')
	async getRefreshToken(@Request() req, @Response() res) {
		const data = await this.authService.getRefreshToken(req.user);
		return res.json({ data, message: true });
	}
	// Register USer
	@Post('register')
	@HttpCode(HttpStatus.OK)
	async register(@Body() dto: RegisterDto, @Response() res) {
		await this.authService.register(dto);
		return res.json({ message: true });
	}
}
