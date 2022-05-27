import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
    '/cars/getData',
    async () => {
        const response = await axios.get("http://localhost:2000/cars")
        const datas = response.data

        return datas
    }
)

const carSlice = createSlice({
    name: "cars",
    initialState: {
        allCars: [],
        filter: {
            isWithDriver: "",
            availableAt: "",
            availableTime: "",
            capacity: ""
        },
        filterCars: []
    },
    reducers: {
        setAllCars(state, action) {
            // state.filterCars=[],
            state.filter = {
                isWithDriver: "",
                availableAt: "",
                availableTime: "",
                capacity: ""
            }
            state.allCars = action.payload
        },
        updateCard(state) {
            const status = state.filter?.isWithDriver === "Dengan Sopir"
            state.filterCars = state.allCars.filter(car => car.isWithDriver === status)

            const date = state.filter.availableAt
            const time = state.filter.availableTime.replace(" WIB", "")
            const passanger = state.filter.capacity.replace(" orang", "");
            

            if (date && time) {
                state.filterCars = state.allCars.filter(car => {
                    const dataAvailableAt = new Date(car.availableAt).getTime()
                    const filterAvailableAt = new Date(`${date} ${time}`).getTime()
                    console.log(dataAvailableAt, filterAvailableAt)

                    return dataAvailableAt >= filterAvailableAt
                })
            }
            if (passanger) {
                state.filterCars = state.allCars.filter(car => car.capacity >= +passanger)
            }
        },

updateFilter(state, action) {
            state.filter = {
                ...state.filter,
                ...action.payload
            }
        },

    },
    extraReducers: {
        [getData.pending]: (state, action) => {

        },
        [getData.fulfilled]: (state, action) => {
            state.allCars = action.payload.data.result
        },
        [getData.rejected]: (state, action) => {

        }
    }
})
export const carAction = carSlice.actions;
export default carSlice