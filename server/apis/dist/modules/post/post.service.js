"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PostService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../../entities/post.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../entities/user.entity");
let PostService = exports.PostService = PostService_1 = class PostService {
    constructor(postRepository, userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(PostService_1.name);
    }
    async createPost(dto) {
        this.logger.log(dto);
        try {
            const user = await this.userRepository.findOneBy({ id: dto.userId });
            let { userId, ...post } = { user, ...dto };
            post = this.postRepository.create(post);
            await this.postRepository.save(post);
        }
        catch (error) {
            throw new common_1.BadRequestException('Wrong something', {
                cause: error,
                description: 'Have a good day',
            });
        }
    }
    async findPost(dto) {
        const post = await this.postRepository.find({
            select: {
                id: true,
                title: true,
                createAt: true,
                user: {
                    username: true,
                },
            },
            relations: { user: true },
            where: [
                {
                    title: (0, typeorm_2.Like)(`%${dto}%`),
                },
            ],
            order: {
                createAt: 'DESC',
            },
        });
        return { data: post };
    }
    async FindPostRead(dto) {
        const post = await this.postRepository.find({
            select: {
                id: true,
                title: true,
                post: true,
                createAt: true,
                user: {
                    username: true,
                },
            },
            relations: { user: true },
            where: { id: dto.id },
        });
        return post;
    }
    async FindPostByPageLimit(dto) {
        const { page, limit } = dto;
        const post = await this.postRepository.find({
            select: {
                id: true,
                title: true,
                post: true,
                createAt: true,
                user: {
                    username: true,
                },
            },
            relations: { user: true },
            skip: (page - 1) * limit,
            take: limit,
            order: {
                createAt: 'DESC',
            },
        });
        return post;
    }
    async DeletePostById(dto) {
        const data = await this.postRepository.delete({ id: dto.id });
        return data;
    }
};
exports.PostService = PostService = PostService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PostService);
//# sourceMappingURL=post.service.js.map