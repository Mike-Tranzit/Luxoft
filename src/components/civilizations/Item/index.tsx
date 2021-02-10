import React, {ReactElement, useState} from 'react';
import {ItemProps} from '../../../types/Props.type';
import Details from '../Details';
import './style.css';

/**
 *
 * @param CivilizationsItem
 * @constructor
 */
const Index: React.FC<ItemProps> = ({civilization}: ItemProps): ReactElement => {

    const [detailIsVisible, setDetailVisible] = useState<boolean>(false);
    const clickHandler = (e: React.SyntheticEvent) => {
        setDetailVisible(!detailIsVisible);
    };
    const activeClass = detailIsVisible ? 'active' : '';
    return (
            <div className='civilizations-list-container--item'>
                <label onClick={clickHandler} className={activeClass}>{civilization.name}</label>

                    {detailIsVisible && <Details civilization={civilization}/>}

            </div>
    );
};

export default Index;
