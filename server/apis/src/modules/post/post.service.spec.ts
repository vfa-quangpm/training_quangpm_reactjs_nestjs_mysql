import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { FindPostDto } from './dto/post.dto';

describe('PostService', () => {
	let service: PostService;
	let mockPostService = {
		createPost: jest.fn((dto) => {}),
	};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PostService],
		})
			.overrideProvider(PostService)
			.useValue(mockPostService)
			.compile();

		service = module.get<PostService>(PostService);
	});

	it('should be defined', () => {});
	it('should be find post', () => {
		const dto: FindPostDto = { title: 'hell' };
		expect(service.findPost(dto)).toEqual({});
	});
});
