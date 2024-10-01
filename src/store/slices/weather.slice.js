import {createSlice} from "@reduxjs/toolkit";
import {sendRequest} from "@/helpers/sendRequest.js";
import {API_KEY, API_URL} from "@/config/API.js";


const initialState = {
    meta: {}
};


export const fetchWeather = (city = 'kyiv') => async (dispatch) => {
    try {
        const data = await sendRequest(`${API_URL}?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`);

        const {current, location} = data;

        const metaData = {
            city: location.name,
            cloud: current.cloud,
            humidity: current.humidity,
            feelslike: current.feelslike_c,
        };

        dispatch(updateWeatherMeta(metaData));
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        updateWeatherMeta: (state, action) => {
            state.meta = action.payload;
        }
    }
});


export const {updateWeatherMeta} = weatherSlice.actions;
export default weatherSlice.reducer;
