import { CreateUserDto, UserDto } from '../dto';
import { Post } from '../../post/entities/post.entity';
import { Comment } from '../../comment/entities/comment.entity';
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
