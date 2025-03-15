import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
  
  @Entity()
  export class ItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false, type: 'varchar' })
    name: string;
    
    @Column({ nullable: false, type: 'varchar' })
    desc: string;

    @Column({ nullable: false, type: 'boolean', default: true })
    active: Boolean;
  
    @CreateDateColumn({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
  }