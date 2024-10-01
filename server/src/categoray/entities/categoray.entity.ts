import { Customer } from 'src/customers/entities/customer.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Categoray {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Amount: number;

  @Column({ nullable: true })
  Start: Date;

  @Column({ nullable: true })
  End: Date;

  @Column({ default: false })
  IsCompleted: boolean;

  @OneToMany(() => Customer, customer => customer.category)
  customers: Customer[];
}
