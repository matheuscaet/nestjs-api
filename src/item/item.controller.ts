import { Body, Controller, Post } from '@nestjs/common';
import { CreateItemDto } from './dtos/create-item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto) {
    return await this.itemService.createItem(createItemDto);
  }
}
