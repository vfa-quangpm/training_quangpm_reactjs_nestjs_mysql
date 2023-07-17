import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto';
import { GetRefreshTokenDto, GetTokensDto, AuthGuardDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    private userRepository;
    private readonly logger;
    constructor(userService: UserService, jwtService: JwtService, userRepository: Repository<User>);
    validateUser(username: string, password: string): Promise<any>;
    logIn(dto: AuthGuardDto): Promise<any[]>;
    logout(dto: AuthGuardDto): Promise<void>;
    getProfileUser(dto: AuthGuardDto): Promise<any[]>;
    register(dto: CreateUserDto): Promise<void>;
    getRefreshToken(dto: GetRefreshTokenDto): Promise<any[]>;
    getTokens(dto: GetTokensDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateToken(id: number, rt: string): Promise<void>;
}
