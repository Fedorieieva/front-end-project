import {createSlice} from "@reduxjs/toolkit";
import {sendRequest} from "@/helpers/sendRequest.js";
import {API_KEY, API_URL} from "@/config/API.js";

const initialState = {
    meta: {}
};

const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
};

const getCityName = async (latitude, longitude) => {
    const response = await sendRequest(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    return response.city;
};

export const fetchWeather = () => async (dispatch) => {
    try {
        const {latitude, longitude} = await getUserLocation();
        const city = await getCityName(latitude, longitude);
        const data = await sendRequest(`${API_URL}?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`);

        const {current} = data;

        const metaData = {
            feelslike: current.feelslike_c,
            city: city,
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
