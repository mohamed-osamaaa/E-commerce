import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { CreateShippingDto } from './create-shipping.dto';
import { OrderedProductsDto } from './ordered-products.dto';

export class CreateOrderDto {
  @Type(() => CreateShippingDto)
  @ValidateNested()
  shippingAddress: CreateShippingDto;

  @Type(() => OrderedProductsDto)
  @ValidateNested()
  orderedProducts: OrderedProductsDto[];
}
