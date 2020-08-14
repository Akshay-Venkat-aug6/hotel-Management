const initialState = {
  hotels: [],
  isFind: '',
  search_hotel: [],
}

const searchReducer = (state = initialState, action) => {
  // const { childno } = action.payload;
  switch(action.type){
    case 'SEARCH_HOTEL':
      action.payload.hotels.map((list) => (
        state.hotels.push(list)
      ))
      action.payload.hotels.map((list) => (
        state.search_hotel.push(list)
      ))
      sessionStorage.clear()
      return {
        ...state,
        isFind: action.payload.isFind
      }
    case 'SEARCH_AMENITITES_RATING':
      const search_hotel_rating = [];
      if(state.search_hotel.length === 0){
        state.hotels.map((list) => {
          state.search_hotel.push(list)
        })
      }
      state.search_hotel.map((list) => {
        search_hotel_rating.push(list)
      })
      
      state.search_hotel = [];
      let rating = sessionStorage.getItem('rating')
      search_hotel_rating.map((list) => {
        if(list.rating === parseInt(rating, 10)){
          state.search_hotel.push(list)
        }
      })
      return {
        ...state
      }
    case 'SEARCH_AMENITITES_PRICE':
      let search_hotel_price = [];
      state.search_hotel.map((list) => {
        search_hotel_price.push(list)
      })

      state.search_hotel = [];
      let min_price = action.payload.min_price
      let max_price = action.payload.max_price
      
      if(sessionStorage.getItem('isPrice')){
        state.hotels.map((list) => {
          if(list.price.split('$')[1] < max_price && list.price.split('$')[1] > min_price){
            state.search_hotel.push(list)
          }
        })
      }
      return {
        ...state
      }
    case 'SEARCH_HOTEL_NAME':
      const search_hotel_name = [];
      state.search_hotel.map((list) => {
        search_hotel_name.push(list)
      })
      if(action.payload.name === ""){
        state.search_hotel = [];
        // console.log(state)
        state.hotels.map((list) => {
          state.search_hotel.push(list)
        })
        console.log(state.search_hotel)
      }
      else{
        state.search_hotel = [];
        search_hotel_name.map((list)=>{
          // if()
          if(list.name.includes(action.payload.name)){
            state.search_hotel.push(list)
          }
        })
      }
      return {
        ...state
      }
    default:
      return state
  }
}

export default searchReducer