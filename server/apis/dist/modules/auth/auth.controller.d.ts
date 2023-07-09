import { AuthService } from './auth.service';
import { LoginUserDto, RegisterDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    logIn(dto: LoginUserDto): Promise<{
        message: string;
        access_token: string | object;
    }>;
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
}
