import { Categoray } from "src/categoray/entities/categoray.entity";

export class CreateCustomerDto {
    Name : string;
    Phone : number;
    WorkingPlace: string;
    Gender: string;
    categoryId: any
}
