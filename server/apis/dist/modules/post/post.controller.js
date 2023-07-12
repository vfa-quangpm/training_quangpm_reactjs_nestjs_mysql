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
var PostController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const auth_guard_1 = require("../auth/auth.guard");
let PostController = exports.PostController = PostController_1 = class PostController {
    constructor(postService) {
        this.postService = postService;
        this.logger = new common_1.Logger(PostController_1.name);
    }
    async createPost(req, res, dto) {
        dto = { userId: req['user'], ...req.body };
        await this.postService.createPost(dto);
        return res.json({
            message: 'Successfully',
        });
    }
    async findPost(req, res, dto) {
        dto = { id: null, title: req.body?.title, page: 1, limit: 10 };
        const posts = await this.postService.findPost(dto);
        return res.json({ data: posts, message: 'Successfully' });
    }
    async findPostByPageLimit(query, res, dto) {
        dto = { id: null, title: '', ...query };
        const data = await this.postService.findPost(dto);
        return res.json({
            data,
            message: 'Successfully!',
        });
    }
    async findPostByTitle(id, res, dto) {
        dto = { id, title: '', page: 1, limit: 1 };
        const data = await this.postService.findPost(dto);
        return res.json({
            data,
            message: 'Successfully!',
        });
    }
    async deletePostById(id, res) {
        const data = await this.postService.DeletePostById({ id });
        return res.json({
            data,
            message: 'Successfully!',
        });
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findPost", null);
__decorate([
    (0, common_1.Get)('page'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findPostByPageLimit", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findPostByTitle", null);
__decorate([
    (0, common_1.Delete)(`/:id`),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePostById", null);
exports.PostController = PostController = PostController_1 = __decorate([
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map