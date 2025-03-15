import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class SharedModule {}
