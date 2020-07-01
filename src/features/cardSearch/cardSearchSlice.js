import { createSlice } from '@reduxjs/toolkit'
import { API_HOST, API_URL, API_KEY } from '../../utils/Constants'
const cardSlice = createSlice({
    name: 'card',
    initialState: { card: [], loading: false, error: false },
    reducers: {
        dataRequest: state => {
            state.loading = true
            state.error = false
            state.card = []
        },
        dataSuccess: (state, action) => {
            state.loading = false
            state.error = false
            state.card = action.payload
        },
        dataEror: state => {
            state.error = true
            state.loading = false

        }
    },
    extraReducers: {}

})
export const searchCard = (cardName, limit) => dispatch => {
    dispatch(dataRequest())
    try {
        const reducedBuildings = [];
        fetch(`${API_URL}search/${cardName}/`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": `${API_HOST}`,
                "x-rapidapi-key": `${API_KEY}`
            }
        })
            .then(res => {
                if (res.status == 404) {
                    dispatch(dataEror())
                } else {
                    res.json()
                        .then((json) => {
                            json.forEach(building => {
                                if (reducedBuildings.length < limit) {
                                    reducedBuildings.push(building);
                                }
                            })
                            dispatch(dataSuccess(reducedBuildings))
                        })
                }
            })
    } catch (error) {

    }

}

export const { dataRequest, dataSuccess, dataEror } = cardSlice.actions;
export const cardData = state => state.card;
export const cardReducer = cardSlice.reducer;

