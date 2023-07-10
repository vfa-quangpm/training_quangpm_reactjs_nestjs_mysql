import {
	CanActivate,
	ExecutionContext,
	Injectable,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from './constants';

@Injectable()
export class AuthGuard implements CanActivate {
	private readonly logger = new Logger(AuthGuard.name);
	constructor(private jwtService: JwtService) {}

	// Authentication using token
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<Request>();
		const token = this.extractTokenFromHeader(request);
		if (!token) throw new UnauthorizedException();
		try {
			const payload = await this.jwtService.verifyAsync(token, {
				secret: jwtConstants.secret,
			});
			request['user'] = payload.id;
		} catch {
			throw new UnauthorizedException();
		}
		return true;
	}

	// Extract token from header
	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		return type === 'Bearer' ? token : undefined;
	}
}
