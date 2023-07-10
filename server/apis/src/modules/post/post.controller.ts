import {
	Controller,
	Post,
	UseGuards,
	Logger,
	Req,
	BadRequestException,
	HttpStatus,
	HttpCode,
	Res,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, PostDto } from './dto/post.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Request, Response } from 'express';

@Controller('post')
export class PostController {
	private readonly logger = new Logger(PostController.name);
	constructor(private readonly postService: PostService) {}

	// Create Blog
	@Post('create')
	@HttpCode(HttpStatus.OK)
	@UseGuards(AuthGuard)
	async createPost(
		@Req() req: Request,
		@Res() res: Response,
		dto: CreatePostDto,
	): Promise<Response> {
		dto = { userId: req['user'], ...req.body };
		await this.postService.createPost(dto);
		return res.json({
			message: 'Successfully',
		});
	}
}
