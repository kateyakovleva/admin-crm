import { apiGet, apiPost } from '../api';
import { IReview, IReviewID, IReviews } from '../types/reviews';

export const getListReviews = async () => {
	return await apiGet<IReviews>( { url: '/reviews' } );
};

export const getReview = async ( id: string ) => {
	return await apiGet<IReview>( { url: `/review/${ id }` } );
};

export const saveReview = async ( id: string, data: any ) => {
	return await apiPost<IReviewID>( {
		url: `/reviews/${ id }`,
		postData: data
	} );
};

export const createReview = async ( data: any ) => {
	return await apiPost<IReviewID>( {
		url: '/reviews',
		postData: data
	} );
};
