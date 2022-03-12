import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
  
  @Entity()
  export class Item extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false, type: 'varchar' })
    name: string;
    
    @Column({ nullable: false, type: 'varchar' })
    desc: string;

    @Column({ nullable: false, type: 'boolean' })
    active: Boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }