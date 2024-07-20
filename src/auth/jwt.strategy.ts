import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    console.log("JWT STRATEGY", jwtConstants.secret(), process.env.JWT_SECRET);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret(),
    });
  }

  async validate(payload: { username: string }) {
    const { username } = payload;
    const user = await this.userService.findOne(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
