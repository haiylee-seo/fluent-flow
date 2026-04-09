import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const jwtSecret = process.env.SUPABASE_JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('SUPABASE_JWT_SECRET is not set');
    }

    super({
      // 1. Header의 Authorization: Bearer <토큰>에서 추출합니다.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // 2. 아까 .env에 넣은 설정값 사용
      secretOrKey: jwtSecret,
    });
  }

  // 검증이 성공하면 호출되는 함수
  validate(payload: { sub: string; email: string }) {
    // payload 안에는 유저의 ID(sub), 이메일 등이 포함됨
    // 여기서 리턴한 값은 요청 객체(req.user)에 자동으로 담김
    return { userId: payload.sub, email: payload.email };
  }
}
