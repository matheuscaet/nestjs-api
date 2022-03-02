import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateItemDto } from './dtos/create-item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto) {
    return await this.itemService.createItem(createItemDto);
  }

  @Get()
  async getAll() {
    return await this.itemService.getAllItems();
  }

  @Get(':id')
  async getItem(@Param(':id') id: string) {
    return await this.itemService.getItem(id);
  }
}


