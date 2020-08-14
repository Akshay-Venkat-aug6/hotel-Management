import { searchhotel } from '../../../api/api';

export const SEARCH = (search) => (dispatch) => {
  return searchhotel(search)
      .then(
        response => {
          console.log(response)
          dispatch({
            type: "SEARCH_HOTEL",
            payload: {
              hotels: response.data.hotels,
              isFind: response.data.isFind
            }
          })
        }
      )
};

export const SEARCH_AMENITITES_PRICE  = search_part => {
  console.log(sessionStorage.getItem('min_price'))
  return {
    type: "SEARCH_AMENITITES_PRICE",
    payload: {
      min_price: sessionStorage.getItem('min_price'),
      max_price: sessionStorage.getItem('max_price'),
    }
  }
}

export const SEARCH_AMENITITES_RATING  = search_part => {
  return {
    type: "SEARCH_AMENITITES_RATING",
    payload: {
      rating: sessionStorage.getItem('rating')
    }
  }
}

export const SEARCH_HOTEL_NAME  = hotel => {
  return {
    type: "SEARCH_HOTEL_NAME",
    payload: {
      name: hotel.name
    }
  }
}