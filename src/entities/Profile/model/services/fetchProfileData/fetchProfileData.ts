import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (ProfileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        if (!ProfileId) {
            rejectWithValue('no id');
        }
        try {
            const response = await extra.api.get<Profile>(`/profile/${ProfileId}`);
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
