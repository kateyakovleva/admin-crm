export const getBaseUrl = ( path?: string ) => {
  if ( !path ) path = '';
  path = path.startsWith( '/' ) ? path : '/' + path;
  // eslint-disable-next-line no-undef
  return ( process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_PROD_URL ) + path;
};

export const getApiUrl = ( path?: string ) => {
  if ( !path ) path = '';
  path = path.startsWith( '/' ) ? path : '/' + path;
  return getBaseUrl( '/api' + path );
};

export const getImageUrl = ( path?: string ) => {
  path = path?.startsWith( '/' ) ? path : '/' + path;
  return getBaseUrl( `/storage${ path }` );
};
