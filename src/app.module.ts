import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { ItemModule } from './item/item.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
