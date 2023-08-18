import { Products } from "./Products";

export interface ProductsFetchResponse {
    data: {
        allProducts: Products[];
    };
}
