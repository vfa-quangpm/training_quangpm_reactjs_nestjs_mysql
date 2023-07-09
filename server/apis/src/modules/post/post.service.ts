import { Injectable, Logger } from '@nestjs/common';
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
	) {}
	// Create new post
	async createPost(dto: CreatePostDto): Promise<InsertResult> {
		return this.postRepository
			.createQueryBuilder()
			.insert()
			.values(dto)
			.execute();
	}
}
