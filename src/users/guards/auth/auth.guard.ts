import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requets = context.switchToHttp().getRequest() as Request;
    console.log(requets.url);

    if (!requets.headers['authorization']) return false;
    if (requets.url === '/greet') return false;

    return true;
  }
}
