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
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
	private readonly logger = new Logger(AuthService.name);
	constructor(
		private userService: UserService,
		private jwtService: JwtService,
	) {}

	// login user
	async logIn(dto: LoginUserDto): Promise<object | string> {
		const user = await this.userService.findOne(dto.username);
		if (await bcrypt.compare(dto?.password, user.password) ) 
			return await this.jwtService.signAsync({ id: user.id });
		return null;
	}

	// Register user
	async register(dto: CreateUserDto): Promise<void> {
		await this.userService.create(dto);
	}
}
