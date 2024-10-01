import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateCategorayDto } from './dto/create-categoray.dto';
import { UpdateCategorayDto } from './dto/update-categoray.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoray } from './entities/categoray.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorayService {
  constructor(
    @InjectRepository(Categoray)
    private CategorayRepository: Repository<Categoray>,
  ) {}

  async create(createCategorayDto: CreateCategorayDto) {
    const { Amount, Start, End, IsCompleted } = createCategorayDto;
    if(!Amount){
      return {error: 'የእቁብ መጠን አላገቡም '}
    }
    try {
      // Create new record instance
      const newCategoray = this.CategorayRepository.create({
        Amount,
        Start,
        End,
        IsCompleted,
      });
      console.log(newCategoray);
      // Save the new record into the database
      const savedCategoray = await this.CategorayRepository.save(newCategoray);

      return savedCategoray;
    } catch (error) {
      if (error.code === '23505') {
        // Handle a duplicate key error (if you have unique constraints)
        throw new BadRequestException(
          'A record with these details already exists.',
        );
      } else {
        // Handle general errors
        throw new InternalServerErrorException(
          'Failed to create a new record. Please try again later.',
        );
      }
    }
  }

  async findAll(): Promise<Categoray[]> {
    try {
      const categories = await this.CategorayRepository.find();
      return categories;
    } catch (error) {
      throw new Error(`Failed to retrieve categories: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const category = await this.CategorayRepository.findOne({
        where: { id },
      });

      if (!category) {
        return { error: 'እንደዚ አይነት እቁብ የለም ወይም ጠፍቶዋል' };
      }
      return category;
    } catch (error) {
      return { error: 'የተሳሳተ ነገር አስገብተዋል' };
    }
  }

  async update(id: number, updateCategorayDto: UpdateCategorayDto) {
    try {
      const category = await this.CategorayRepository.findOne({
        where: { id },
      });

      if (!category) {
        return { error: 'እንደዚ አይነት እቁብ የለም ወይም ጠፍቶዋል' };
      }

      // Update the category with new values
      Object.assign(category, updateCategorayDto);

      await this.CategorayRepository.save(category);

      return category;
    } catch (error) {
      return { error: 'የተሳሳተ ነገር አስገብተዋል' };    }
  }

  async remove(id: number) {
    try {
      const category = await this.CategorayRepository.findOne({ where: { id } });
      
      if (!category) {
        return { error: 'እንደዚ አይነት እቁብ የለም ወይም ጠፍቶዋል' };
      }
  
      await this.CategorayRepository.remove(category);
    } catch (error) {
      return { error: 'የተሳሳተ ነገር አስገብተዋል' };

    }
  }
  
}
