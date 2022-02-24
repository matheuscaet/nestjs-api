import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from './dtos/create-item.dto';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemRepository)
    private itemRepository: ItemRepository,
  ) {}

  async createItem(createItemDto: CreateItemDto){
      return this.itemRepository.createItem(createItemDto);
  }
}