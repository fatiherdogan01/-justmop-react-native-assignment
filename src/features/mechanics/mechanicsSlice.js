import { createSlice } from '@reduxjs/toolkit'
import { API_HOST, API_URL, API_KEY } from '../../utils/Constants'
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
export const fetchData = limit => dispatch => {
    const reducedBuildings = []
    try {
        fetch(`${API_URL}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": `${API_HOST}`,
                "x-rapidapi-key": `${API_KEY}`
            }
        })
            .then((res) => res.json())
            .then((json) => {
                Object.keys(json).map((keys) => {
                    json[keys].map((building) => {
                        if (reducedBuildings.length < limit) {
                            reducedBuildings.push(building);
                        }
                    })
                })
                dispatch(dataRequest(reducedBuildings))
            })
    } catch (error) { }

}
export const { dataRequest } = mechanicsSlice.actions;
export const mechanicsData = state => state.mechanics;
export const mechanicsReducer = mechanicsSlice.reducer;

