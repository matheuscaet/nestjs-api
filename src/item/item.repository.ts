
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

    async getAllItems(){
        try {    
            return await Item.find({ 
                select: ['name', 'desc', 'createdAt', 'updatedAt'],
            })
        } catch (error) {
            return error
        }
    }

    async getItemById(itemId: string){
        try {    
            return await Item.findOne(itemId, { 
                select: ['name', 'desc', 'createdAt', 'updatedAt'],
            })
        } catch (error) {
            return error
        }
    }
}