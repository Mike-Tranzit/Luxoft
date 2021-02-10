import React from 'react';
import Details from 'components/civilizations/Details';
import {ItemProps} from '../types/Props.type';
import {Story, Meta} from '@storybook/react/types-6-0';
import {withKnobs, object} from '@storybook/addon-knobs';
import {default as mockCivilizations} from '../tests/fixtures/mock.json';
import {CivilizationsItem} from "../types/Civilizations.type";

export default {
    title: 'Civilizations/Details',
    component: Details,
    parameters: {
        docs: {
            description: {
                component: 'Details of civilization'
            }
        }
    },
    argTypes: {
        civilization: {
            description: 'Civilization body',
            control: {
                type: 'object'
            },
            defaultValue: false,
            type: {
                required: true
            },
        }
    },
    decorators: [withKnobs]
} as Meta;

const Template: Story<ItemProps> = (args) => <Details {...args}/>;
export const Basic = Template.bind({});
Basic.args = {
    civilization: object('civilization', mockCivilizations[0] as CivilizationsItem)
};
