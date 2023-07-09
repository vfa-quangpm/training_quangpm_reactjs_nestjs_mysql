import {
	BadRequestException,
	Body,
	Controller,
	Post,
	UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
	ApiBody,
	ApiHeader,
	ApiRequestTimeoutResponse,
	ApiTags,
} from '@nestjs/swagger';
import { LoginUserDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	// Login user
	@Post('login')
	async logIn(@Body() dto: LoginUserDto) {
		const access_token = await this.authService.logIn(dto);
		if (access_token)
			return {
				message: 'Successfully!',
				access_token,
			};
		throw new BadRequestException('Failing', {
			cause: new Error(),
			description: 'Exist username',
		});
	}

	// Register USer
	@Post('register')
	async register(@Body() dto: RegisterDto) {
		try {
			await this.authService.register(dto);
			return {
				message: 'Successfully!',
			};
		} catch (error) {
			throw new BadRequestException('Failing', {
				cause: error,
				description: 'Exist username',
			});
		}
	}
}
