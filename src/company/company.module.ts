import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entity/company.entity';
import { CompanyService } from './company.service';
import { CompanyPhoto } from './entity/companyPhoto.entity';
import { CompanyLocation } from './entity/companyLocation.entity';
import { AuthModule } from '../auth/auth.module';
import { S3ManagerModule } from '../s3manager/s3-manager.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Company, CompanyPhoto, CompanyLocation]),
    S3ManagerModule,
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
  exports: [],
})
export class CompanyModule {}
