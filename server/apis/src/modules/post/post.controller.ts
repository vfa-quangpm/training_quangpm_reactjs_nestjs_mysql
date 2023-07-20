import {
	Controller,
	Post,
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
import { Request, Response } from 'express';

@Controller('post')
export class PostController {
	private readonly logger = new Logger(PostController.name);
	constructor(private readonly postService: PostService) {}

	// Create Blog
	@Post('create')
	@HttpCode(HttpStatus.OK)
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
	// Find blog list
	@Post()
	async findPostList(@Req() req: Request, @Res() res: Response) {
		const data = await this.postService.findPost(req.body);
		this.logger.log(data);
		return res.json({ data, message: 'Successfully' });
	}

	// Delete Blog using id
	@Delete(`/:id`)
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
