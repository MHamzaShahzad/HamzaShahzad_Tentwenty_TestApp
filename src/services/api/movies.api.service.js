import Constants from '../../utils/constants';
import APICaller from './caller.api.service';

export const getUpcomingMovies = (options, callback, errorCallback) => { APICaller.authAPI(Constants.API.METHOD.GET, Constants.API.ENDPOINT.UPCOMING, options, callback, errorCallback)}
export const getMovieDetail = (id, callback, errorCallback) => { APICaller.authAPI(Constants.API.METHOD.GET, `${id}`, {}, callback, errorCallback) };
export const getMovieImages = (id, callback, errorCallback) => { APICaller.authAPI(Constants.API.METHOD.GET, `${id}/${Constants.API.ENDPOINT.IMAGES}`, {}, callback, errorCallback) };
export const getSearchMovies = (query, callback, errorCallback) => { APICaller.generalAuthAPI(Constants.API.SEARCH_URL, Constants.API.METHOD.GET, `${Constants.API.ENDPOINT.SEARCH}`, query, callback, errorCallback) };

// export const createBooking = async (booking, callback, errorCallback) => { APICaller.authAPI(Constants.API.METHOD.POST, Constants.API.ENDPOINT.BOOKINGS, booking, callback, errorCallback) };
// export const updateBooking = async (id, booking, callback, errorCallback) => { APICaller.authAPI(Constants.API.METHOD.PUT, `${Constants.API.ENDPOINT.BOOKINGS}${id}`, booking, callback, errorCallback) };
// export const cancelBooking = async (id, booking, callback, errorCallback) => { APICaller.authAPI(Constants.API.METHOD.PUT, `${Constants.API.ENDPOINT.BOOKINGS}${id}/cancel`, booking, callback, errorCallback) };
// export const applyPromoCode = async (id, promo_code, callback, errorCallback) => { APICaller.authAPI(Constants.API.METHOD.GET, `${Constants.API.ENDPOINT.BOOKINGS}${id}/promo_code?promo_code=${promo_code}`, promo_code, callback, errorCallback) };