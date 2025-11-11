
export interface PriceInterface {
    name: string;
    price: number; // using string since you have "$499"
    description: string;
    features: string[];
    highlight: boolean;
}