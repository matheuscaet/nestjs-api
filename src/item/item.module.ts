import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './item.repository';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ItemRepository])],
    providers: [ItemService],
    controllers: [ItemController],
  })
  export class ItemModule {}
