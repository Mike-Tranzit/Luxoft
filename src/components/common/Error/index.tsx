import React, {ReactElement} from 'react';
import {useSelector} from "react-redux";
import {selectAppData} from "utils/StateSelectors";
import './style.css';

const Index: React.FC = (): ReactElement => {
    const {alert} = useSelector(selectAppData);
    return (
        <div className='error'>
            {alert && <h2>{alert}</h2>}
        </div>
    );
};

export default Index;
