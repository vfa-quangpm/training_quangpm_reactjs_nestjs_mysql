import { User } from 'src/entities/user.entity';

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
export interface FindPostDto {
	title: string;
}
export interface FindPostByIdDto {
	id: number;
}
export interface FindPostByPageLimit {
	page: number;
	limit: number;
}
export interface DeletePostById {
	id: number;
}
