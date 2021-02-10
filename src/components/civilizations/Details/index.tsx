import React, {ReactElement} from 'react';
import {ItemProps} from '../../../types/Props.type';
import './style.css';

/**
 * @param civilization
 * @constructor
 */
const Index: React.FC<ItemProps> = ({civilization}: ItemProps): ReactElement => {
    const {expansion, army_type, team_bonus, civilization_bonus} = civilization;
    return (
                <article>
                    <p><strong>Expansion:</strong> {expansion}</p>
                    <p><strong>Army Type:</strong> {army_type}</p>
                    <p><strong>Team Bonus:</strong> {team_bonus}</p>
                    <p><strong>Civilization Bonus:</strong> {civilization_bonus.join(", ")}</p>
                </article>
    );
};

 export default Index;
