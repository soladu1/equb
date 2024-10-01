import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { Categoray } from 'src/categoray/entities/categoray.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,

    @InjectRepository(Categoray)
    private readonly categorayRepository: Repository<Categoray>, // You need this to handle the foreign key relationship
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto)

    try {
      // Fetch the related category using the categoryId provided in the DTO
      const category = await this.categorayRepository.findOne(
        {where:{id:createCustomerDto.categoryId,}}
      );
      if (!category) {
        return { error: 'እንደዚ አይነት እቁብ አልተገኘም' };
      }

      // Create a new Customer entity
      const newCustomer = this.customerRepository.create({
        Name: createCustomerDto.Name,
        Phone: createCustomerDto.Phone,
        WorkingPlace: createCustomerDto.WorkingPlace,
        Gender: createCustomerDto.Gender,
        category, // Set the relation to the category
      });
      console.log(newCustomer)

      // Save the new customer to the database
      return await this.customerRepository.save(newCustomer);
    } catch (error) {
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }

  async findAll() {
    try {
      // Fetch all customers and join their related category
      return await this.customerRepository.find();
    } catch (error) {
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }

  async findOne(id: number) {
    try {
      const customer = await this.customerRepository.findOneBy({ id });
      if (!customer) {
        return { error: 'የተፈለገው ሰው አልተገኘም በድጋሚ ይሞልሩ' };
      }
      return customer;
    } catch (error) {
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    if(!id){
      return { error: 'የተፈለገው ሰው አልተገኘም በድጋሚ ይሞልሩ' };

    }
    try {
      const customer = await this.customerRepository.findOneBy({ id });

      if (!customer) {
        return { error: 'የተፈለገው ሰው አልተገኘም በድጋሚ ይሞልሩ' };
      }

      const updatedCustomer = { ...customer, ...updateCustomerDto };
      await this.customerRepository.save(updatedCustomer);

      return updatedCustomer;
    } catch (error) {
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }

  async remove(id: number) {
    try {
      const result = await this.customerRepository.delete(id);

      if (result.affected === 0) {
        return { error: 'የተፈለገው ሰው አልተገኘም በድጋሚ ይሞልሩ' };
      }

      return `Customer with ID #${id} has been removed successfully.`;
    } catch (error) {
      return { error: 'የውስጥ ችግር ስለተፈጠረ መልሰው ይሞክሩ' };
    }
  }
}
