import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from './dto';
export declare class UserService {
    private usersRepository;
    private readonly logger;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<void>;
    findOne(username: string): Promise<any>;
}
