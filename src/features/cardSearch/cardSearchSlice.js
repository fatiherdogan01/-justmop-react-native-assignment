import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
    name: 'card',
    initialState: { card: [], loading: false, error: false },
    reducers: {
        dataRequest: state => {
            state.loading = true
            state.error = false
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
export const searchCard = cardName => dispatch => {
    dispatch(dataRequest())
    try {
        fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${cardName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "31dbadaadbmsh93c65baee51ded1p1d1da7jsn45540e48d18f"
            }
        })

            .then((res) => {
                if (res.status == 404) {
                    dispatch(dataEror())
                } else {
                    res.json().then((json) => dispatch(dataSuccess(json.slice(0, 5))))
                }
            })

    } catch (error) {
    }



}

export const { dataRequest, dataSuccess, dataEror } = cardSlice.actions;
export const cardData = state => state.card;
export const cardReducer = cardSlice.reducer;

