import { UserRole } from '../../user/entities/user.entity';
export interface LoginUserDto {
    username: string;
    password: string;
}
export interface RegisterDto {
    username: string;
    password: string;
    role: UserRole;
}
