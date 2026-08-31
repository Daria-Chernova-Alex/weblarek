import { IProduct } from '../../types';

export class Basket {
    private items: IProduct[] = [];

    getItems(): IProduct[] {
        return this.items;
    }

    addItem(item: IProduct): void {
        if (!this.hasItem(item.id)) {
            this.items.push(item);
        }
    }

    removeItem(item: IProduct): void {
        this.items = this.items.filter(
            (basketItem) => basketItem.id !== item.id // условие «оставить, если ID не совпадает». То есть все товары с таким же ID будут исключены из нового массива.
        );
    }

    clear(): void {
        this.items = [];
    }

    getTotal(): number { // возвращает общую стоимость товаров в корзине
        return this.items.reduce((total, item) => total + (item.price ?? 0), 0);
    }

    getCount(): number { // возвращает количество товаров в корзине
        return this.items.length;
    }

    hasItem(id: string): boolean { // проверяет наличие товара с переданным id в корзине
        return this.items.some((item) => item.id === id);
    }
}