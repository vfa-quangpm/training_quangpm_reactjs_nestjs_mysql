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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
let Post = exports.Post = class Post {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Title',
        type: 'varchar',
        length: 50,
        unique: true,
    }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Post',
        type: 'text',
    }),
    __metadata("design:type", String)
], Post.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'CreateAt',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Post.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'UpdateAt',
        type: 'datetime',
        update: true,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Post.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.posts),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Post.prototype, "user", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)()
], Post);
//# sourceMappingURL=post.entity.js.map