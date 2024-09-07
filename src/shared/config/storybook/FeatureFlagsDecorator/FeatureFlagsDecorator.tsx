import { Decorator } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeatureFlagsDecorator =
    (features: FeatureFlags): Decorator =>
    (Story) => {
        setFeatureFlags(features);
        return (
            <div className="app_redesigned">
                <Story />
            </div>
        );
    };
