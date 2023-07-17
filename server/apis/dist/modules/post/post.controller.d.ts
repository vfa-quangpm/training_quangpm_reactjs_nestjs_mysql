import { PostService } from './post.service';
import { CreatePostDto, FindPostDto } from './dto/post.dto';
import { Request, Response } from 'express';
export declare class PostController {
    private readonly postService;
    private readonly logger;
    constructor(postService: PostService);
    createPost(req: Request, res: Response, dto: CreatePostDto): Promise<Response>;
    findPost(req: Request, res: Response, dto: FindPostDto): Promise<Response>;
    findPostByPageLimit(query: any, res: Response): Promise<Response<any, Record<string, any>>>;
    findPostByTitle(id: number, res: Response): Promise<object>;
    deletePostById(id: number, res: Response): Promise<object>;
}
