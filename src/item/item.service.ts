import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto, UpdateItemDto } from './dtos/_index';
import { ItemEntity } from './item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ) {}

  async createItem(createItemDto: CreateItemDto){
      return this.itemRepository.save(createItemDto);
  }

  async getAllItems(){
    return this.itemRepository.find();
  }
  
  async getItem(itemId: string){
      return this.itemRepository.findOne(itemId);
  }

  async updateItem(id: string, updateItemDto: UpdateItemDto){
    return this.itemRepository.update(id, updateItemDto);
  }

  async deleteItem(itemId: string){
    return this.itemRepository.delete(itemId);
  }
}