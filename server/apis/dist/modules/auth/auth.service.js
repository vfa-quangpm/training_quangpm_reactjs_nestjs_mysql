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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../entities/user.entity");
let AuthService = exports.AuthService = AuthService_1 = class AuthService {
    constructor(userService, jwtService, userRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async validateUser(username, password) {
        const user = await this.userRepository.findOne({ where: { username } });
        const isCompare = await bcrypt.compare(password, user?.password);
        if (user && isCompare) {
            const { password, hashRt, role, ...result } = user;
            return result;
        }
        return null;
    }
    async logIn(dto) {
        const { access_token, refresh_token } = await this.getTokens({
            id: dto.id,
            username: dto.username,
        });
        await this.updateToken(dto.id, refresh_token);
        return [{ access_token, refresh_token }];
    }
    async logout(dto) {
        await this.userRepository.update({ id: dto.id }, { hashRt: null });
    }
    async getProfileUser(dto) {
        const { password, hashRt, ...result } = await this.userRepository.findOne({
            where: { id: dto.id },
        });
        return [result];
    }
    async register(dto) {
        try {
            await this.userService.create(dto);
        }
        catch (error) {
            throw new common_1.BadRequestException('Failing', {
                cause: error,
                description: 'Not exist username or password',
            });
        }
    }
    async getRefreshToken(dto) {
        const user = await this.userRepository.findOne({
            where: { id: dto.id },
        });
        if (!user || !user.hashRt)
            throw new common_1.ForbiddenException('Access denied');
        this.logger.log(dto.refresh_token);
        if (user.hashRt === dto.refresh_token)
            throw new common_1.ForbiddenException('Access denied');
        const { access_token, refresh_token } = await this.getTokens({
            id: user.id,
            username: user.username,
        });
        await this.updateToken(user.id, refresh_token);
        return [{ access_token, refresh_token }];
    }
    async getTokens(dto) {
        const jwtPayload = { username: dto.username, sub: dto.id };
        const at = await this.jwtService.signAsync(jwtPayload, {
            expiresIn: '30s',
        });
        const rt = await this.jwtService.signAsync(jwtPayload, {
            expiresIn: '7d',
        });
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
    async updateToken(id, rt) {
        await this.userRepository.update({ id }, { hashRt: rt });
    }
};
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map