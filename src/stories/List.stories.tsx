import React from 'react';
import List from 'components/civilizations/List';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
    title: 'Civilizations/Items',
    component: List,
    parameters: {
        docs: {
            description: {
                component: 'Main UI for list of civilizations'
            }
        }
    }
} as Meta;

export const Basic: Story = () => <List/>;
