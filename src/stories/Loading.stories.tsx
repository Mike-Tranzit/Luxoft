import React from 'react';
import Loading from 'components/common/Loading';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
    title: 'Common/Loading',
    component: Loading,
    parameters: {
        docs: {
            description: {
                component: 'Loading until data is loaded'
            }
        }
    }
} as Meta;

export const Basic: Story = () => <Loading/>;
