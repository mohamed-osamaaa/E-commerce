import { Transform } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'title can not be blank.' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'description can not be empty.' })
  @IsString()
  description: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber({}, { message: 'Price must be a number' })
  @IsPositive({ message: 'Price should be a positive number' })
  @Max(999999, { message: 'Price is too high' }) // Optional limit
  price: number;

  @Transform(({ value }) => parseInt(value))
  @IsInt({ message: 'Stock should be an integer' })
  @Min(0, { message: 'Stock cannot be negative' })
  stock: number;

  @Transform(({ value }) =>
    isNaN(parseInt(value)) ? undefined : parseInt(value),
  )
  @IsOptional()
  @IsInt({ message: 'Category ID should be a number' })
  categoryId?: number;

  @IsOptional()
  @IsArray({ message: 'Images must be an array' })
  @IsString({ each: true, message: 'Each image URL must be a string' })
  @Transform(({ value }) =>
    Array.isArray(value) ? value : value ? [value] : [],
  )
  images?: string[];
}
