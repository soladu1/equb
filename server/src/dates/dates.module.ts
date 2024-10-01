import { Module } from '@nestjs/common';
import { DatesService } from './dates.service';
import { DatesController } from './dates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentDate } from './entities/date.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentDate, Customer])],

  controllers: [DatesController],
  providers: [DatesService],
})
export class DatesModule {}
