import { Categoray } from 'src/categoray/entities/categoray.entity';
import { PaymentDate } from 'src/dates/entities/date.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Phone: number;

  @Column()
  WorkingPlace: string;

  @Column()
  Name: string;

  @Column()
  Gender: string;

  // Many customers can be associated with one category
  @ManyToOne(() => Categoray)
  @JoinColumn({ name: 'categoryId' })  // This creates the foreign key column 'categoryId'
  category: Categoray;  // This will store the Categoray entity that is related to this customer

  // Define the OneToMany relationship to PaymentDate
  @OneToMany(() => PaymentDate, (paymentDate) => paymentDate.customer)
  dates: PaymentDate[];  // Add this property to store related PaymentDate entities
}
