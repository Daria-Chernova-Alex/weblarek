import { IBuyer, TPayment } from '../../types';

export class Buyer {
    private payment: TPayment | null = null;
    private address = '';
    private email = '';
    private phone = '';

    setData(data: Partial<IBuyer>): void { //сохраняет переданные данные покупателя. Позволяет изменять отдельные поля, не удаляя уже сохранённые значения остальных полей
        if (data.payment !== undefined) {
            this.payment = data.payment;
        }

        if (data.address !== undefined) {
            this.address = data.address;
        }

        if (data.email !== undefined) {
            this.email = data.email;
        }

        if (data.phone !== undefined) {
            this.phone = data.phone;
        }
    }

    getData(): Partial<IBuyer> { // возвращает сохранённые данные покупателя
        const data: Partial<IBuyer> = {
            address: this.address,
            email: this.email,
            phone: this.phone,
        };

        if (this.payment !== null) {
            data.payment = this.payment;
        }

        return data;
    }

    clear(): void {
        this.payment = null;
        this.address = '';
        this.email = '';
        this.phone = '';
    }

    validate(): Partial<Record<keyof IBuyer, string>> { // В результирующем объекте не обязаны быть все поля. Если поле валидно, его не будет в объекте (возвращаем только ошибки)
        const currentErrors: Partial<Record<keyof IBuyer, string>> = {};

        if (!this.payment) {
            currentErrors.payment = 'Не выбран вид оплаты';
        }

        if (!this.address.trim()) {
            currentErrors.address = 'Укажите адрес доставки';
        }

        if (!this.email.trim()) {
            currentErrors.email = 'Укажите email';
        }

        if (!this.phone.trim()) {
            currentErrors.phone = 'Укажите телефон';
        }

        return currentErrors;
    }
}