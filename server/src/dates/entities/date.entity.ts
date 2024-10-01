import { Customer } from 'src/customers/entities/customer.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class PaymentDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Amount: number;

  @Column()
  PaymentDate: Date;  // Rename the property to avoid conflict

  // Define the relationship with the Customer entity
  @ManyToOne(() => Customer, (customer) => customer.dates, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customerId' }) // Foreign key column
  customer: Customer;

  @Column()
  customerId: number;  // Add a column to store the foreign key
}
