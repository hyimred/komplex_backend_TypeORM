import { Body, Controller, Get, Post, Render, Put, Delete, Param } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Storages } from './storages.entity';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'A szerver fut a 3000-es porton' };
  }

  @Get('/api/tarhely')
  async listStorages() {
    const storageRepo = this.dataSource.getRepository(Storages);
    return {storage: await storageRepo.find() };
  }

  @Post('/api/tarhely')
  newStorage(@Body() storage: Storages) {
    storage.id = undefined;
    const storageRepo = this.dataSource.getRepository(Storages);
    storageRepo.save(storage);
  }

  @Delete('/api/tarhely/:id')
  deleteStorage(@Param('id') id: number) {
    const storageRepo = this.dataSource.getRepository(Storages);
    storageRepo.delete(id);
  }

  

}
