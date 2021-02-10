import React from 'react';
import Item from 'components/civilizations/Item';
import {ItemProps} from '../types/Props.type';
import {Story, Meta} from '@storybook/react/types-6-0';
import {withKnobs, object} from '@storybook/addon-knobs';
import {default as mockCivilizations} from '../tests/fixtures/mock.json';
import {CivilizationsItem} from "../types/Civilizations.type";

export default {
    title: 'Civilizations/Item',
    component: Item,
    parameters: {
        docs: {
            description: {
                component: 'One line of civilizations list'
            }
        }
    },
    argTypes: {
        civilization: {
            description: 'Civilization body',
            control: {
                type: 'object'
            },
            type: {
                required: true
            },
        }
    },
    decorators: [withKnobs]
} as Meta;

const Template: Story<ItemProps> = (args) => <Item {...args}/>;
export const Basic = Template.bind({});
Basic.args = {
    civilization: object('civilization', mockCivilizations[0] as CivilizationsItem)
};
