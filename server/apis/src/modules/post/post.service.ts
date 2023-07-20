import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import {
	CreatePostDto,
	DeletePostById,
	FindPostByIdDto,
	FindPostByPageLimit,
	FindPostDto,
} from './dto/post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../../entities/post.entity';
import { EntityManager, Like, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class PostService {
	private readonly logger = new Logger(PostService.name);
	constructor(
		@InjectRepository(Post)
		private postRepository: Repository<Post>,
		@InjectRepository(User)
		private userRepository: Repository<User>,
	) {}
	// Create new post
	async createPost(dto: CreatePostDto): Promise<void> {
		this.logger.log(dto);
		try {
			const user = await this.userRepository.findOneBy({ id: dto.userId });
			let { userId, ...post } = { user, ...dto };
			post = this.postRepository.create(post);
			await this.postRepository.save(post);
		} catch (error) {
			throw new BadRequestException('Wrong something', {
				cause: error,
				description: 'Have a good day',
			});
		}
	}

	// Find Blog to Search
	async findPost(dto: FindPostDto): Promise<object> {
		const post = await this.postRepository.find({
			select: {
				id: true,
				title: true,
				createAt: true,
				user: {
					username: true,
				},
			},
			relations: { user: true },
			where: [
				{
					title: Like(`%${dto}%`),
				},
			],
			order: {
				createAt: 'DESC',
			},
		});
		return { data: post };
	}

	//Find Post for start to read
	async FindPostRead(dto: FindPostByIdDto): Promise<object> {
		const post = await this.postRepository.find({
			select: {
				id: true,
				title: true,
				post: true,
				createAt: true,
				user: {
					username: true,
				},
			},
			relations: { user: true },
			where: { id: dto.id },
		});
		return post;
	}

	// Find post by page and limit
	async FindPostByPageLimit(dto: FindPostByPageLimit): Promise<object> {
		const { page, limit } = dto;
		const post = await this.postRepository.find({
			select: {
				id: true,
				title: true,
				post: true,
				createAt: true,
				user: {
					username: true,
				},
			},
			relations: { user: true },
			skip: (page - 1) * limit,
			take: limit,
			order: {
				createAt: 'DESC',
			},
		});
		return post;
	}

	// Delete post by Id
	async DeletePostById(dto: DeletePostById): Promise<object> {
		const data = await this.postRepository.delete({ id: dto.id });
		return data;
	}
}
