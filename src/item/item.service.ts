import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto, UpdateItemDto } from './dtos/_index';
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

  async getAllItems(){
    return this.itemRepository.getAllItems();
  }
  
  async getItem(itemId: string){
      return this.itemRepository.getItemById(itemId);
  }

  async updateItem(id: string, updateItemDto: UpdateItemDto){
    return this.itemRepository.updateItem(id, updateItemDto);
  }

  async deleteItem(itemId: string){
    return this.itemRepository.deleteItem(itemId);
  }
}