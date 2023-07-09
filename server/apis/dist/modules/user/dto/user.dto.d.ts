import { Comment } from '../../comment/entities/comment.entity';
import { Post } from '../../post/entities/post.entity';
declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export interface UserDto {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    posts: Post[];
    comments: Comment[];
}
export interface CreateUserDto {
    username: string;
    password: string;
    role: UserRole;
    posts?: Post[];
    comments?: Comment[];
}
export {};
