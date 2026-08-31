import "./scss/styles.scss";

import { apiProducts } from "./utils/data";
import { Products } from "./components/Models/Products";
import { Basket } from "./components/Models/Basket";
import { Buyer } from "./components/Models/Buyer";

import { Api } from './components/base/Api';
import { WebLarekApi } from './components/WebLarekApi';
import { API_URL } from './utils/constants';

//Тестирование каталога и выбранного товара
const productsModel = new Products();

productsModel.setItems(apiProducts.items);

console.log("Массив товаров из каталога:", productsModel.getItems());

console.log("id товара:", productsModel.getItem(apiProducts.items[0].id));

productsModel.setSelectedItem(apiProducts.items[0]);

console.log("Выбранный товар: ", productsModel.getSelectedItem());

//Тестирование корзины
const basketModel = new Basket();

basketModel.addItem(apiProducts.items[0]);
basketModel.addItem(apiProducts.items[1]);

console.log("Товары в корзине:", basketModel.getItems());

console.log("Количество товаров в корзине:", basketModel.getCount());

console.log("Общая стоимость товаров в корзине:", basketModel.getTotal());

console.log(
  "Наличие товара в корзине:",
  basketModel.hasItem(apiProducts.items[0].id),
);

basketModel.removeItem(apiProducts.items[0]);

console.log("Корзина после удаления товара:", basketModel.getItems());

basketModel.clear();

console.log("Корзина после очистки:", basketModel.getItems());

//Тестирование данных покупателя
const buyerModel = new Buyer();

console.log("Ошибки пустых данных покупателя:", buyerModel.validate());

buyerModel.setData({ payment: 'cash' });
buyerModel.setData({ address: "Нижний Новгород" });
buyerModel.setData({ email: "buyer@example.com" });
buyerModel.setData({ phone: "+7(905)-555-55-55" });

console.log("Данные покупателя:", buyerModel.getData());

console.log("Ошибки в данных покупателя:", buyerModel.validate());

buyerModel.clear();

console.log("Данные покупателя после очистки:", buyerModel.getData());



const api = new Api(API_URL);
const webLarekApi = new WebLarekApi(api);

webLarekApi
    .getProducts()
    .then((data) => {
        productsModel.setItems(data.items);

        console.log(
            'Массив товаров каталога, полученный с сервера:',
            productsModel.getItems()
        );
	
    })


    .catch((error) => {
        console.error('Ошибка при получении товаров с сервера:', error);
    });



