import { AuthService } from './auth.service';
import { LoginUserDto, RegisterDto } from './dto/auth.dto';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    logIn(dto: LoginUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    register(dto: RegisterDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
