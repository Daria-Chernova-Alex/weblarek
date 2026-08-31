import {
    IApi,
    IProductsResponse,
    IOrder,
    IOrderResult,
} from '../types';

export class WebLarekApi {
    constructor(private api: IApi) {}

    // Получить список товаров
    getProducts(): Promise<IProductsResponse> {
        return this.api.get<IProductsResponse>('/product/');
    }

    // Отправить заказ 
    postOrder(order: IOrder): Promise<IOrderResult> {
        return this.api.post<IOrderResult>('/order/', order);
    }
}