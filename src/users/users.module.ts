import {
  MiddlewareConsumer,
  Module,
  NestModule,
  Req,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
// export class UsersModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // Para todas las rutas del módulo
//     // consumer.apply(LoggerMiddleware).forRoutes('users');

//     // Para ciertas rutas y métodos
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({
//         path: '/users',
//         method: RequestMethod.GET,
//       })
//       .apply(AuthMiddleware)
//       .forRoutes('users');
//   }
// }
