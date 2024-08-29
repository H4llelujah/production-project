import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { updateFeatureFlagsMutation } from '../api/FeatureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>('features/updateFeatureFlags', async ({ userId, newFeatures }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures,
                },
            }),
        );

        window.location.reload();
        return undefined;
    } catch (e) {
        return rejectWithValue('error');
    }
});
