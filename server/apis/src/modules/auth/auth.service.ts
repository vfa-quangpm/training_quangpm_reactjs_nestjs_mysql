import {
	BadRequestException,
	Injectable,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto';
import { LoginUserDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	private readonly logger = new Logger(AuthService.name);
	constructor(
		private userService: UserService,
		private jwtService: JwtService,
	) {}

	// login user
	async logIn(dto: LoginUserDto): Promise<object | string> {
		this.logger.log('logIn...');
		const user = await this.userService.findOne(dto.username);
		const isCompare = await bcrypt.compare(dto?.password, user.password);
		if (isCompare) return await this.jwtService.signAsync({ id: user.id });
		throw new BadRequestException('Failing', {
			cause: new Error(),
			description: 'Exist username',
		});
	}

	// Register user
	async register(dto: CreateUserDto): Promise<void> {
		this.logger.log('register...');
		try {
			await this.userService.create(dto);
		} catch (error) {
			throw new BadRequestException('Failing', {
				cause: error,
				description: 'Not exist username or password',
			});
		}
	}
}
