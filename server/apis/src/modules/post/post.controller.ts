import {
	Controller,
	Post,
	UseGuards,
	Logger,
	Req,
	HttpStatus,
	HttpCode,
	Res,
	Get,
	Param,
	Query,
	Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, FindPostDto } from './dto/post.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Request, Response, query } from 'express';
import { QueryResult } from 'typeorm';

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

	// Find Blog for search
	@Get()
	async findPost(
		@Req() req: Request,
		@Res() res: Response,
		dto: FindPostDto,
	): Promise<object> {
		dto = { id: null, title: req.body?.title, page: 1, limit: 10 };
		const posts = await this.postService.findPost(dto);
		return res.json({ data: posts, message: 'Successfully' });
	}
	// Find Blog use page and limit
	@Get('page')
	async findPostByPageLimit(
		@Query() query,
		@Res() res: Response,
		dto: FindPostDto,
	) {
		dto = { id: null, title: '', ...query };
		const data = await this.postService.findPost(dto);
		return res.json({
			data,
			message: 'Successfully!',
		});
	}
	// Find Blog for get start to read
	@Get('/:id')
	async findPostByTitle(
		@Param('id') id: number,
		@Res() res: Response,
		dto: FindPostDto,
	): Promise<object> {
		dto = { id, title: '', page: 1, limit: 1 };
		const data = await this.postService.findPost(dto);
		return res.json({
			data,
			message: 'Successfully!',
		});
	}

	// Delete Blog using id
	@Delete(`/:id`)
	@UseGuards(AuthGuard)
	async deletePostById(
		@Param(`id`) id: number,
		@Res() res: Response,
	): Promise<object> {
		const data = await this.postService.DeletePostById({ id });
		return res.json({
			data,
			message: 'Successfully!',
		});
	}
}
