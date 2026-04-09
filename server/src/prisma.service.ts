import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not set');
    }

    super({
      adapter: new PrismaPg({ connectionString: databaseUrl }),
    });
  }

  // 앱이 시작될 때 DB와 연결
  async onModuleInit() {
    await this.$connect();
  }

  // 앱이 꺼질 때 연결을 안전하게 닫음
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
