import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
