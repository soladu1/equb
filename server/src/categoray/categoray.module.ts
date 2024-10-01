import { Module } from '@nestjs/common';
import { CategorayService } from './categoray.service';
import { CategorayController } from './categoray.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoray } from './entities/categoray.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoray])],

  controllers: [CategorayController],
  providers: [CategorayService],
})
export class CategorayModule {}
