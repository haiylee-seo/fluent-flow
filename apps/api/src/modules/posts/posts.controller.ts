// 프론트엔드에서 날아오는 데이터를 받아서 서비스로 넘겨주는 역할만
import { Controller, Patch, Post, Param, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import type { UpdatePostDto } from '@fluent-flow/types';
import { posts } from '@prisma/client';

@Controller('posts') // 👈 이제 이 API의 주소는 /api/posts 가 됩니다.
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post() // ID 없이 그냥 /posts 로 요청이 오면 생성!
  async createPost(@Body() createData: UpdatePostDto): Promise<posts> {
    return await this.postsService.createPost(createData);
  }

  // 프론트엔드의 디바운스 자동 저장을 받아주는 엔드포인트
  @Patch(':id')
  // 컨트롤러 함수에도 Promise<posts> 를 반환한다고 명시
  async updatePost(
    @Param('id') id: string,
    @Body() updateData: UpdatePostDto,
  ): Promise<posts> {
    return await this.postsService.updatePost(id, updateData);
  }
}
