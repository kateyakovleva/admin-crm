export interface ICustomers {
	items: ICustomer[];
	count: number;
}

export interface ICustomer {
	status: number;
	id: string;
	username: string;
	firstname: string;
	email: string;
	telephone: string;
	image: string;
	gender: string;
	password: string;
	cityId: number;
	isClient: number;
	isModel: number;
	isCompany: number;
	balance: number;
	created_at: string;
	rating: number;
}

//наследование

//todo: referral
export interface ICustomerID extends ICustomer {
	rating: number;
	roleId: number;
	balanceLog: IBalanceLog[];
	cancelledTrips24: number;
	cancelledTripsTotal: number;
	created_at: string;
}

export interface IBalanceLog {
	amount: number;
	comment: string;
	whoChanged: string;
	createdAt: string;
}

