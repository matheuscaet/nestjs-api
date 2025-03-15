import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { ItemEntity } from './item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ItemEntity])],
    providers: [ItemService],
    controllers: [ItemController],
  })
  export class ItemModule {}
