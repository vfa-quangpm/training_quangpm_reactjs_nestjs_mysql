import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreatePostDto, DeletePostById, FindPostListDto } from './dto/post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../../entities/post.entity';
import { IsNull, Like, Not, Repository } from 'typeorm';
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

	// Find Blog List
	async findPost(dto: FindPostListDto): Promise<object> {
		const { id, title, page, limit } = dto;
		const data = await this.postRepository.find({
			select: {
				id: true,
				title: true,
				createAt: true,
				user: {
					username: true,
				},
			},
			relations: { user: true },
			where: { id: id || Not(IsNull()), title: Like(`%${title || ''}%`) },
			skip: (page - 1) * limit || 0,
			take: limit || 5,
			order: {
				createAt: 'DESC',
			},
		});
		return data;
	}

	// Find Blog By Id
	async findPostById(dto: { id: number }): Promise<object> {
		const data = await this.postRepository.findOne({ where: { id: dto.id } });
		return data;
	}

	// Delete post by Id
	async DeletePostById(dto: DeletePostById): Promise<object> {
		const data = await this.postRepository.delete({ id: dto.id });
		return data;
	}
}
