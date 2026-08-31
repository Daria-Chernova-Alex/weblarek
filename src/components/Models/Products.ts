import { IProduct } from '../../types';

export class Products {
    private items: IProduct[] = [];
    private selectedItem: IProduct | null = null;

    setItems(items: IProduct[]): void { //сохраняет массив товаров
        this.items = items;
    }

    getItems(): IProduct[] { //возвращает массив всех товаров
        return this.items;
    }

    getItem(id: string): IProduct | undefined { //получение одного товара по его id
        return this.items.find((item) => item.id === id);
    }

    setSelectedItem(item: IProduct): void { //сохраняет товар, выбранный для подробного отображения
        this.selectedItem = item;
    }

    getSelectedItem(): IProduct | null { //возвращает выбранный товар или null, если товар не выбран
        return this.selectedItem;
    }
}