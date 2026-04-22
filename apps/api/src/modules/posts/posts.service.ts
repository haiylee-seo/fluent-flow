import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Prisma 서비스 경로에 맞게 수정하세요
import type { UpdatePostDto } from '@fluent-flow/types'; // 패키지 이름(@repo/types 등)에 맞게 임포트하세요
import { Prisma, posts } from '@prisma/client'; // Prisma 기본 모듈 임포트

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  // 함수 이름 뒤에 무조건 Promise<posts> 를 반환한다고 명시
  async updatePost(id: string, data: UpdatePostDto): Promise<posts> {
    return await this.prisma.posts.update({
      where: { id },
      data: {
        title: data.title,
        icon: data.icon,
        content: data.content
          ? (data.content as Prisma.InputJsonValue)
          : undefined,
      },
    });
  }

  // 새 글을 생성하는 함수
  async createPost(data: UpdatePostDto): Promise<posts> {
    return await this.prisma.posts.create({
      data: {
        title: data.title,
        icon: data.icon,
        content: data.content
          ? (data.content as Prisma.InputJsonValue)
          : undefined,
      },
    });
  }
}
