import { CreateUserDto, UserDto } from '../modules/user/dto';
import { Post } from './post.entity';
import { Comment } from './comment.entity';
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export declare class User implements UserDto, CreateUserDto {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    posts: Post[];
    comments: Comment[];
}
