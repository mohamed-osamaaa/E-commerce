import { dataSourceOptions } from 'db/data-source';
import * as multer from 'multer';

import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';
import { CurrentUserMiddleware } from './utility/middlewares/current-user.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    CategoriesModule,
    ProductsModule,
    ReviewsModule,
    OrdersModule,
    MulterModule.register({
      storage: multer.memoryStorage(), // Use multer.memoryStorage() here
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
