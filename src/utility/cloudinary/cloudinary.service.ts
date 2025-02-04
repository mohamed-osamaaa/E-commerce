import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CloudinaryService {
  uploadFiles(files: Express.Multer.File[]): Promise<string[]> {
    if (files.length === 1) {
      // If there's only one file, wrap the result in an array
      return this.uploadFile(files[0]).then((url) => [url]);
    }
    return Promise.all(
      files.map((file) => this.uploadFile(file)), // Handle multiple files
    );
  }

  // Make this public so it can be accessed in ProductsService
  public uploadFile(file: Express.Multer.File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!file || !file.buffer) {
        return reject(new Error('File buffer is undefined'));
      }

      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'uploads' }, // Optional: Define a folder in Cloudinary
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            return reject(error);
          }
          resolve(result.secure_url); // Return the secure_url directly
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}
