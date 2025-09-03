import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from '../resources/user/user.module';
import { TaskModule } from '../resources/task/task.module';
import { AuthModule } from 'src/resources/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { verifyTokenMiddleware } from 'src/common/interceptors/verify-token-middleware';


@Module({
  imports: [UserModule, TaskModule, AuthModule,
    JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(verifyTokenMiddleware)
      .forRoutes(
          { path: 'api/user/delete', method: RequestMethod.ALL },
          { path: 'api/user/update', method: RequestMethod.ALL },

          { path: 'api/task/userTasks', method: RequestMethod.ALL },
          { path: 'api/task/create', method: RequestMethod.ALL },
          { path: 'api/task/complete/:id', method: RequestMethod.ALL },
          { path: 'api/task/update/:id', method: RequestMethod.ALL },
          { path: 'api/task/delete/:id', method: RequestMethod.ALL },
      );
  }
}
