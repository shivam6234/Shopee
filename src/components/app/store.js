import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import cartReducer  from '../features/cart/cartSlice'
import counterReducer2 from '../features/counter/counterslice2'
import productReducer from '../features/product/productSlice'
import wishlistReducer from './wishlist/wislistslice'




export const store =configureStore({
    reducer:{
        counter: counterReducer,
        counter2:counterReducer2,
        cart:cartReducer,
        product:productReducer,
        wishlist:wishlistReducer
     

    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


})
export default store;