import { User } from '../../user/entities/user.entity';
import { PostDto } from '../dto/post.dto';
export declare class Post implements PostDto {
    id: number;
    title: string;
    post: string;
    createAt: Date;
    updateAt: Date;
    user: User;
}
