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
	): Promise<Response> {
		dto = req.body.title;
		return res.json(await this.postService.findPost(dto));
	}
	// Find Blog use page and limit
	@Get('page')
	async findPostByPageLimit(@Query() query, @Res() res: Response) {
		const data = await this.postService.FindPostByPageLimit(query);
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
	): Promise<object> {
		const post = await this.postService.FindPostRead({ id });
		return res.json({ data: post, message: 'Successfully!' });
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
