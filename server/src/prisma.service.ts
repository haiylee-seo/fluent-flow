import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // 앱이 시작될 때 DB와 연결합니다.
  async onModuleInit() {
    await this.$connect();
  }

  // 앱이 꺼질 때 연결을 안전하게 닫습니다.
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
