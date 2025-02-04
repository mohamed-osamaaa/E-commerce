import { CategoriesModule } from 'src/categories/categories.module';
import { OrdersModule } from 'src/orders/orders.module';
import { CloudinaryModule } from 'src/utility/cloudinary/cloudinary.module';

import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CloudinaryService } from '../utility/cloudinary/cloudinary.service';
import { ProductEntity } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    CategoriesModule,
    forwardRef(() => OrdersModule),
    CloudinaryModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CloudinaryService],
  exports: [ProductsService, CloudinaryService],
})
export class ProductsModule {}
