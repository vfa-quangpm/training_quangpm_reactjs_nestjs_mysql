import { User } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostDto } from '../dto/post.dto';

@Entity()
export class Post implements PostDto {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column({
		name: 'Title',
		type: 'varchar',
		length: 50,
		unique: true,
	})
	title: string;

	@Column({
		name: 'Post',
		type: 'text',
	})
	post: string;

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
		nullable: true,
	})
	updateAt: Date;

	@ManyToOne(() => User, (user) => user.posts)
	user: User;
}
