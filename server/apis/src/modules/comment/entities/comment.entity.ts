import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommentDto } from '../dto/comment.dto';
import { User } from '../../user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';

@Entity()
export class Comment implements CommentDto {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@ManyToOne(() => User, (author) => author.id)
	authorId: User;

	@ManyToOne(() => Post, (post) => post.id)
	postId: Post;

	@Column({
		name: 'Comment',
		type: 'text',
	})
	comment: string;

	@Column({
		name: 'CreateAt',
		type: 'datetime',
		default: () => 'CURRENT_TIMESTAMP',
	})
	createAt: Date;

	@Column({
		name: 'UpdateAt',
		type: 'datetime',
		update: true,
	})
	updateAt: Date;
}
