import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto';
import { LoginUserDto } from './dto/auth.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly logger;
    constructor(userService: UserService, jwtService: JwtService);
    logIn(dto: LoginUserDto): Promise<object | string>;
    register(dto: CreateUserDto): Promise<void>;
}
