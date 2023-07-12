import { User } from './user.entity';
import { PostDto } from '../modules/post/dto/post.dto';
export declare class Post implements PostDto {
    id: number;
    title: string;
    post: string;
    createAt: Date;
    updateAt: Date;
    user: User;
}
