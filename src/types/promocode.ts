export interface IPromoCode {
	id: number;
	discount: number;
	status: number;
	created_at: string;
	expiry_at: string;
}

export interface IPromoCodes {
	items: IPromoCode[];
	count: number;
}

export interface IPromoCodeID extends IPromoCode {
	couponCode: number;

	limit: number;
	usedInScheduleBooking: number;
}

0;