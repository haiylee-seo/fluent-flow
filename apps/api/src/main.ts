import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정 (프론트엔드 버셀 주소 허용)
  app.enableCors({
    origin: ['https://fluent-flow-lime.vercel.app', 'http://localhost:5173'], // 프론트 주소 넣기
    credentials: true,
  });

  // 버셀 환경에서는 process.env.PORT를 사용해야 함
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(process.env.PORT || 3000);
}
bootstrap().catch((err) => console.error(err));
