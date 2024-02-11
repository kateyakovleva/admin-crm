export const CREATED_STATUS = 0;
export const PAID_STATUS = 1;
export const PAY_BLOCKED_STATUS = 2;
export const PART_REFUNDED_STATUS = 3;
export const REFUNDED_STATUS = 4;
export const EXECUTED_STATUS = 5;

export interface IOrders {
	items: IOrder[];
	count: number;
}

//todo: сделать кастомеров и квестион сложными объектами
export interface IOrder {
	id: number;
	customer: string; //ICustomer
	deliveryAddress: string;
	status: number;
	statusName: string;
	total: number;
	created_at: string;

}

//todo: commission, invoiceId
export interface IOrderID extends IOrder {
	settle: boolean;
	invoiceId: number;
	products: IProduct[];
}

export interface IProduct {
	id: number;
	needDelivery: boolean;
	price: number;
	total: number;
	commission: number;
	time: string;
	arrivalTime: string;
	status: number;
	statusName: string;
	options: IProductsOptions[];
}

export interface IProductsOptions {
	serviceId: number;
	name: string;
	price: number;
}

