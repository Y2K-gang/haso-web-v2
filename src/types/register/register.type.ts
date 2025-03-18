import { CategoryEnum } from "src/types/category/category.enum";

export interface FormData {
    title: string;
    quantity: number;
    price: number;
    description: string;
    location: string;
    category: CategoryEnum;
}