import { createSlice } from '@reduxjs/toolkit'

const mechanicsSlice = createSlice({
    name: 'mechanics',
    initialState: { data: [], loading: true },
    reducers: {
        dataRequest: (state, action) => {
            state.loading = false
            state.data = action.payload
        },

    },
    extraReducers: {}

})
export const fetchData = dispatch => (
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "31dbadaadbmsh93c65baee51ded1p1d1da7jsn45540e48d18f"
        }
    })
        .then((res) => res.json())
        .then((json) => dispatch(dataRequest(json)))


)
export const { dataRequest } = mechanicsSlice.actions;
export const mechanicsData = state => state.mechanics;
export const mechanicsReducer = mechanicsSlice.reducer;

