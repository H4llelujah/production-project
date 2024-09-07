import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';

const meta: Meta<typeof Code> = {
    title: 'Shared/Redesigned/Code',
    component: Code,
    tags: ['autodocs'],
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        text:
            "import type { Meta, StoryObj } from '@storybook/react'\n" +
            'import { Code } from "./Code";\n' +
            '\n' +
            'const meta: Meta<typeof Code> = {\n' +
            '    title: "Shared/Code",n' +
            '    component: Code,\n' +
            '    tags: ["autodocs"],\n' +
            '};\n' +
            '\n' +
            'export default meta;\n' +
            '\n' +
            'type Story = StoryObj<typeof Code>;',
    },
};
