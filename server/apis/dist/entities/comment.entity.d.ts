import { CommentDto } from '../modules/comment/dto/comment.dto';
import { User } from './user.entity';
import { Post } from './post.entity';
export declare class Comment implements CommentDto {
    id: number;
    authorId: User;
    postId: Post;
    comment: string;
    createAt: Date;
    updateAt: Date;
}
