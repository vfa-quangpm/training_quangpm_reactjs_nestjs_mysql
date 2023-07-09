import {
	Controller,
	Post,
	UseGuards,
	Logger,
	Req,
	BadRequestException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, PostDto } from './dto/post.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@Controller('post')
export class PostController {
	private readonly logger = new Logger(PostController.name);
	constructor(private readonly postService: PostService) {}

	// Create Blog
	@Post('create')
	@UseGuards(AuthGuard)
	async createPost(@Req() req: Request, dto: CreatePostDto): Promise<object> {
		dto = { userId: req['user'], ...req.body };
		if (await this.postService.createPost(dto)) return { message: 'nice' };
		throw new BadRequestException('Failing', {
			cause: new Error(),
			description: 'Hahaha',
		});
	}
}
