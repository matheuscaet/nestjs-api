import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  //await app.listen(3000);

  const app2 = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'item',
      protoPath: join(__dirname, 'item/item.proto'),
      url: '0.0.0.0:50051',
    },
  });

  app2.listen();
}
bootstrap();
