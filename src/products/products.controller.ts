import { UserEntity } from 'src/users/entities/user.entity';
import { Roles } from 'src/utility/common/user-roles.enum';
import { CurrentUser } from 'src/utility/decorators/current-user.decorator';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { AuthorizeGuard } from 'src/utility/guards/authorization.guard';
import { SerializeIncludes } from 'src/utility/interceptors/serialize.interceptor';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { CreateProductDto } from './dto/create-product.dto';
import { ProductsDto } from './dto/products.dto';
import { ProductEntity } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthenticationGuard, AuthorizeGuard([Roles.ADMIN]))
  @UseInterceptors(FilesInterceptor('images', 5))
  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @CurrentUser() currentUser: UserEntity,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<ProductEntity> {
    // console.log('Received files:', files); // Debugging
    return await this.productsService.create(
      createProductDto,
      currentUser,
      files,
    );
  }

  @SerializeIncludes(ProductsDto)
  @Get()
  async findAll(@Query() query: any): Promise<ProductsDto> {
    return await this.productsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(+id);
  }

  // @Patch(':id')
  // @UseGuards(AuthenticationGuard, AuthorizeGuard([Roles.ADMIN]))
  // @UseInterceptors(FileInterceptor('image'))
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateProductDto: UpdateProductDto,
  //   @CurrentUser() currentUser: UserEntity,
  //   @UploadedFile() file: Express.Multer.File,
  // ): Promise<ProductEntity> {
  //   return await this.productsService.update(
  //     +id,
  //     updateProductDto,
  //     currentUser,
  //     file,
  //   );
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(+id);
  }
}
