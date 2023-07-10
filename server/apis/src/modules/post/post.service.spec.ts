import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';

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
});
