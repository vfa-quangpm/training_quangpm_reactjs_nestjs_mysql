import { CreatePostDto, DeletePostById, FindPostByIdDto, FindPostByPageLimit, FindPostDto } from './dto/post.dto';
import { Post } from '../../entities/post.entity';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
export declare class PostService {
    private postRepository;
    private userRepository;
    private readonly logger;
    constructor(postRepository: Repository<Post>, userRepository: Repository<User>);
    createPost(dto: CreatePostDto): Promise<void>;
    findPost(dto: FindPostDto): Promise<object>;
    FindPostRead(dto: FindPostByIdDto): Promise<object>;
    FindPostByPageLimit(dto: FindPostByPageLimit): Promise<object>;
    DeletePostById(dto: DeletePostById): Promise<object>;
}
