import { Injectable } from '@nestjs/common';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentDate } from './entities/date.entity';
import { Repository } from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { error } from 'console';

@Injectable()
export class DatesService {
  constructor(
    @InjectRepository(PaymentDate)
    private readonly paymentDateRepository: Repository<PaymentDate>,

    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createDateDto: CreateDateDto) {
    try {
      // Check if the customer exists
      const customer = await this.customerRepository.findOne({
        where: { id: createDateDto.customerId },
      });

      if (!customer) {
        return { error: 'የተፈለገው ሰው አልተገኘም በድጋሚ ይሞልሩ' };
      }

      // Create a new PaymentDate entity
      const paymentDate = this.paymentDateRepository.create(createDateDto);

      // Save to the database
      return await this.paymentDateRepository.save(paymentDate);
    } catch (error) {
      // Handle errors appropriately
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }

  async findAll() {
    try {
      // Use createQueryBuilder to join PaymentDate with Customer
      const paymentDates = await this.paymentDateRepository
        .createQueryBuilder('paymentDate')
        .leftJoinAndSelect('paymentDate.customer', 'customer') // Join with the Customer entity
        // .select(['paymentDate', 'customer.Name']) // Select fields to return
        .getMany();
  
      return paymentDates;
    } catch (error) {
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }
  

  async findOne(id: number) {
    try {
      // Retrieve a specific payment date by its ID with customer information
      const paymentDate = await this.paymentDateRepository
        .createQueryBuilder('paymentDate')
        .leftJoinAndSelect('paymentDate.customer', 'customer') // Join with Customer
        .where('paymentDate.id = :id', { id }) // Filter by the specified ID
        .getOne(); // Get the single result
  
      if (!paymentDate) {
        return { error: 'የተፈለገው ደንበኛ ስላልተገኘ መልሰው ይሞክሩ' };
      }
  
      return paymentDate;
    } catch (error) {
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }
  

  async update(id: number, updateDateDto: UpdateDateDto) {
    try {
      // Find the payment date by ID
      const paymentDate = await this.paymentDateRepository.findOne({
        where: { id },
      });

      if (!paymentDate) {
        return { error: 'የተፈለገው ክፍያ አልተገኘም በድጋሚ ይሞልሩ' };
      }

      // Update the payment date with the new values
      // Object.assign(paymentDate, updateDateDto);
      const paymentDates = { ...paymentDate, ...updateDateDto };

      // Save the updated payment date
      return await this.paymentDateRepository.save(paymentDates);
    } catch (error) {
      // Handle specific errors here (e.g., log error, throw a new error)
      return { error: 'ክፍያውን መቀየር ስላልቻለ መልሰው ይሞክሩ' };
    }
  }

  async remove(id: number) {
    try {
      // Find the payment date by ID
      const paymentDate = await this.paymentDateRepository.findOne({
        where: { id },
      });

      if (!paymentDate) {
        return { error: 'የተፈለገው ክፍያ አልተገኘም በድጋሚ ይሞልሩ' };
      }

      // Remove the payment date
      await this.paymentDateRepository.remove(paymentDate);
      return { error: 'የተፈለገው ክፍያ በተሳካ ሁኔታ ጠፍቷል' };
      
    } catch (error) {
      // Handle specific errors here (e.g., log error, throw a new error)
      return { error: 'ክፍያውን ማጥፋት ስላልቻለ መልሰው ይሞክሩ' };
    }
  }
}
