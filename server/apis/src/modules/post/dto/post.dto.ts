import { User } from 'src/modules/user/entities/user.entity';

export interface PostDto {
	id: number;
	title: string;
	post: string;
	createAt: Date;
	updateAt: Date;
	user: User;
}

export interface CreatePostDto {
	title: string;
	post: string;
	userId: number;
}
