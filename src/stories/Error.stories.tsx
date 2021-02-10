import React from 'react';
import Error from 'components/common/Error';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
    title: 'Common/Error',
    component: Error,
    parameters: {
        docs: {
            description: {
                component: 'UI when any errors are happened'
            }
        }
    }
} as Meta;

export const Basic: Story = () => <Error/>;
