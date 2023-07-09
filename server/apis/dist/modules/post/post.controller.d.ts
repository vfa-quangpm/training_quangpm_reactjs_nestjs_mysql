import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
import { Request } from 'express';
export declare class PostController {
    private readonly postService;
    private readonly logger;
    constructor(postService: PostService);
    createPost(req: Request, dto: CreatePostDto): Promise<object>;
}
