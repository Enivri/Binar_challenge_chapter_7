import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './carSlice';

const store = configureStore({
    reducer:{
        cars: carsSlice.reducer
    }
})

export default store;