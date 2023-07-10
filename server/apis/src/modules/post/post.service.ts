import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreatePostDto, PostDto } from './dto/post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { InsertResult, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

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
}
