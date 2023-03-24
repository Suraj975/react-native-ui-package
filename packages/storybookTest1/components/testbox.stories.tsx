// stories/TestBox.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TestBox } from 'native-mobile-ui'

export default {
    title: 'components/TestBox',
    component: TestBox,
} as ComponentMeta<typeof TestBox>;

export const Basic: ComponentStory<typeof TestBox> = () => (
    <TestBox />
);

