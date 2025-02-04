import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  },
};
// import { v2 as cloudinary } from 'cloudinary';

// import { ConfigService } from '@nestjs/config';

// export const CloudinaryProvider = {
//   provide: 'CLOUDINARY',
//   useFactory: (configService: ConfigService) => {
//     cloudinary.config({
//       cloud_name: configService.get<string>('CLOUDINARY_CLOUD_NAME'),
//       api_key: configService.get<string>('CLOUDINARY_API_KEY'),
//       api_secret: configService.get<string>('CLOUDINARY_API_SECRET'),
//     });
//     return cloudinary;
//   },
//   inject: [ConfigService],
// };
