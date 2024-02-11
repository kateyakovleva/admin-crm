export interface IAdvertisements {
	items: IAdvertisement[];
	count: number[];
}

export interface IAdvertisement {
	id: string;
	moduleCode: string;
	image: string;
	created_at: string;
	deleted_at: string;
	maxItems: number;
	priceForWeek: number;
	priceForMonth: number;
	name: string;
	title: string;
	subTitle: string;
	status: boolean;
}

export interface IAdvertisementID extends IAdvertisement {
	created_at: string;
	deleted_at: string;
}

