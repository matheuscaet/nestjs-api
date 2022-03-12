import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from './dtos/_index';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto) {
    return await this.itemService.createItem(createItemDto);
  }

  @Get(':id')
  async getItem(@Param('id') id: string) {
    return await this.itemService.getItem(id);
  }

  @Get()
  async getAll() {
    return await this.itemService.getAllItems();
  }

  @Patch(':id')
  async updateItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return await this.itemService.updateItem(id, updateItemDto);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return await this.itemService.deleteItem(id);
  }
  
}


