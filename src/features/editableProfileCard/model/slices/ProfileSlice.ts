import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    readonly: true,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        // FetchProfileData
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            },
        );
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        // updateProfileData
        builder.addCase(updateProfileData.pending, (state) => {
            state.validateErrors = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            updateProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            },
        );
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
export { updateProfileData };
