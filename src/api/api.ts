export interface IApiRequestPost {
  url: string;
  postData?: {};
  headerList?: {};
  loading?: boolean;
  loadingHide?: boolean;
  viewAlert?: boolean;
}

export interface IApiRequestGet {
  url: string;
  headerList?: {};
}

export interface IApiResponseCore<T> {
  status: number;
  error: boolean;
  data: T;
}