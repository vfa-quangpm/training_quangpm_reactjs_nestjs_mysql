import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
import { Request, Response } from 'express';
export declare class PostController {
    private readonly postService;
    private readonly logger;
    constructor(postService: PostService);
    createPost(req: Request, res: Response, dto: CreatePostDto): Promise<Response>;
}
