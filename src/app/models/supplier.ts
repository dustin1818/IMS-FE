export interface Supplier {
    _id?: number;
    supplier_no: number;
    name: string;
    phone_no: number;
    location: string;
}

// export class Supplier {
//     _id?: number;
//     supplier_no: number;
//     name: string;
//     phone_no: number;
//     location: string;

//     constructor(supplier_no: number, name: string, phone_no: number, location: string ){
//         this.supplier_no = supplier_no;
//         this.name = name;
//         this.phone_no = phone_no;
//         this.location = location;
//     }
// }