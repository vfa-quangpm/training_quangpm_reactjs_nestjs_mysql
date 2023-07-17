import { AuthService } from './auth.service';
import { RegisterDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    private readonly logger;
    constructor(authService: AuthService);
    login(req: any, res: any): Promise<any>;
    logout(req: any, res: any): Promise<any>;
    getRefreshToken(req: any, res: any): Promise<any>;
    getProfileUser(req: any, res: any): Promise<any>;
    register(dto: RegisterDto, res: any): Promise<any>;
}
