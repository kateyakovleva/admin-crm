export interface IReviews {
	items: IReview[];
	count: number;
}

export interface IReview {
	id: number;
	rating: number;
	comment: string;
	created_at: string;
	owner: IOwner[];
	target: ITarget[];
}

export interface IOwner {
	id: string;
	username: string;
}

export interface ITarget {
	id: string;
	username: string;
}

export interface IReviewID extends IReview {

}

