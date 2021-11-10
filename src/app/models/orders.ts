export interface Order{
    _id: string;
    itemName: string;
    type: string;
    quantity: number;
    price: number;
    owner:string;
    timestamp: Date
}