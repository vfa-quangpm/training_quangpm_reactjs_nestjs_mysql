import { CommentDto } from '../dto/comment.dto';
import { User } from '../../user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';
export declare class Comment implements CommentDto {
    id: number;
    authorId: User;
    postId: Post;
    comment: string;
    createAt: Date;
    updateAt: Date;
}
