import { CategoryEnum } from "src/types/category/category.enum";

export interface RegisterProps {
    title: string;
    quantity: number;
    price: number;
    description: string;
    location: string;
    category: CategoryEnum;
}