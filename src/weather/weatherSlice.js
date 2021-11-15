import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherAPI";

const initialState = {
    data: null,
    status: "idle"
};

export const getWeather = createAsyncThunk("weather/fetchWeather", async coordinates => {
    const { lat, lng } = coordinates;
    const response = await fetchWeather(lat, lng);
    return response;
});

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getWeather.pending, state => {
                state.status = "loading";
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            });
    }
});

export const selectWeather = state => state.weather;

export default weatherSlice.reducer;
