import { CreatePostDto } from './dto/post.dto';
import { Post } from './entities/post.entity';
import { InsertResult, Repository } from 'typeorm';
export declare class PostService {
    private postRepository;
    private readonly logger;
    constructor(postRepository: Repository<Post>);
    createPost(dto: CreatePostDto): Promise<InsertResult>;
}
