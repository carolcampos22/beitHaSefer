import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { UsersService } from './users/users.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, UsersService, ProductsService],
})
export class AppModule {}
