import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: addCommentFormSchema = {
    text: '',
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
