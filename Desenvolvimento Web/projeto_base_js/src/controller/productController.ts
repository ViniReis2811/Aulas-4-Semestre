import { formatCurrency } from "../helpers/formatCurrency";
import { IProduct } from "../interfaces/IProduct";


export const listProduct = (): Promise<IProduct[]> => {
    const product: IProduct = {
        name: 'Bolacha',
        brand: 'Trakinas',
        price: formatCurrency(2.99),
      };
    
      return Promise.resolve([product]);
}