import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateUserDto, UserDto } from '../dto';
import { Post } from '../../post/entities/post.entity';
import { Comment } from '../../comment/entities/comment.entity';

export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
}

@Entity()
export class User implements UserDto, CreateUserDto {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column({
		name: 'Username',
		type: 'varchar',
		length: 30,
		unique: true,
	})
	username: string;

	@Column({
		name: 'Password',
		type: 'varchar',
	})
	password: string;

	@Column({
		name: 'Role',
		type: 'enum',
		enum: UserRole,
		default: UserRole.USER,
	})
	role: UserRole;

	@OneToMany(() => Post, (post) => post.id)
	posts: Post[];

	@OneToMany(() => Comment, (comment) => comment.id)
	comments: Comment[];
}
