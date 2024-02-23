import { createSlice } from '@reduxjs/toolkit';
import { RWSDECK } from '../shared/RWSDECK'; //placeholder solution until we get to server

const initialState = {
    cardImageArray: RWSDECK,
    readingParams: {},

};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCardImageArray: (state, action) => {    // this is what will pull the selected deck from the database and give us an array of images to pull from 
            state.cardImageArray = action.payload;
        },
        setReadingParams: (state, action) => {   // this will take an object with the selected parameters for the current reading: number of cards, deck, and an array to put randomly selected cards into
            state.readingParams = action.payload;
        },
    },
});

export const selectCardImageById = (id) => (state) => {   // this will take the id of the card and return the image
    return state.cards.cardImageArray.find(
        (img) => img.id === parseInt(id)
    );
};

export const { setCardImageArray, setReadingParams } = cardsSlice.actions;

export default cardsSlice.reducer;