
import { EntityRepository, Repository, getConnection } from 'typeorm';
import { CreateItemDto, UpdateItemDto } from './dtos/_index';
import { Item } from './item.entity';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {

    async createItem(createItemDto: CreateItemDto){
        const { name, desc } = createItemDto;
        try {
            return await getConnection()
                .createQueryBuilder()
                .insert()
                .into('item')
                .values([
                    { name: name, desc: desc, active: true}
                ])
                .execute(); 
        } catch (error) {
            return error
        }
    }

    async getAllItems(){
        try {    
            return await getConnection()
                .createQueryBuilder()
                .select('item')
                .from(Item, "item")
                .where("item.active = :active", { active: true })
                .execute();                
        } catch (error) {
            return error
        }
    }

    async getItemById(itemId: string){
        try {    
            return await getConnection()
                .createQueryBuilder()
                .select('item')
                .from(Item, "item")
                .where("item.active = :active", { active: true })
                .andWhere("item.id = :id", { id: itemId })
                .execute();
        } catch (error) {
            return error
        }
    }
    
    async updateItem(itemId: string, updateItemDto: UpdateItemDto){
        try {
            const {name , desc}  = updateItemDto;
            return await getConnection()
                .createQueryBuilder()
                .update('item')
                .set({ name: name, desc: desc })
                .where("id = :id", { id: itemId })
                .execute();
        } catch (error) {
            return error
        }
    }

    async deleteItem(itemId: string){
        try {
            return await getConnection()
                .createQueryBuilder()
                .update('item')
                .set({ active: false })
                .where("id = :id", { id: itemId })
                .execute();
        } catch (error) {
            return error
        }
    }
}