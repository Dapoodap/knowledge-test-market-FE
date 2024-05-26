import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { thunk } from "redux-thunk";
import userReducer from "../reducers/usersReducer";
import productReducer from "../reducers/productsReducer";


// Menggunakan combineReducers untuk menggambungkan 2 reducer kedalam satu store redux
const mult_store = combineReducers({
    user : userReducer,
    product : productReducer
})

// Tidak lupa menggunakan middleware thunk untuk proses async di redux 
const store = legacy_createStore(mult_store,applyMiddleware(thunk))
export default store;