import { ProductsModule } from 'src/products/products.module';

import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderEntity } from './entities/order.entity';
import { OrdersProductsEntity } from './entities/orders-products.entity';
import { ShippingEntity } from './entities/shipping.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      OrdersProductsEntity,
      ShippingEntity,
    ]),
    forwardRef(() => ProductsModule),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
