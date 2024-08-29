import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlags } from '../../lib/setGetFeatures';

interface ToggleFeaturesOptoins {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export function ToggleFeatures({ feature, on, off }: ToggleFeaturesOptoins) {
    if (getFeatureFlags(feature)) {
        return on;
    }
    return off;
}
