
import { EntityRepository, Repository } from 'typeorm';
import { CreateItemDto } from './dtos/create-item.dto';
import { Item } from './item.entity';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {

    async createItem(createItemDto: CreateItemDto){
        const { name, desc } = createItemDto;

        const item = this.create();
        item.name = name;
        item.desc = desc;
        try {
            return await item.save();
        } catch (error) {
            return error
        }
    }
}