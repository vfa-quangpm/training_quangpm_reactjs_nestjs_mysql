import { Post } from '../../post/entities/post.entity';
import { User } from '../../user/entities/user.entity';
export interface CommentDto {
    id: number;
    authorId: User;
    postId: Post;
    comment: string;
    createAt: Date;
    updateAt: Date;
}
