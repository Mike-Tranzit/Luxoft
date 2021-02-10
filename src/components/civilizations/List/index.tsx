import React, {ReactElement, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestData} from 'store/actions/civilizationsActions';
import {CivilizationsItem} from '../../../types/Civilizations.type';
import {selectAppData, selectCivilizationsData} from 'utils/StateSelectors';
import Loading from '../../common/Loading';
import Item from '../Item';
import './style.css';

const Index: React.FC = (): ReactElement => {
    const {loading} = useSelector(selectAppData);
    const civilizationsData = useSelector(selectCivilizationsData);
    const dispatch = useDispatch();
    const loadDataHandler = useCallback(() => dispatch(requestData()), [dispatch]);

    useEffect(() => {
        loadDataHandler();
    }, []);

    return (
            <>
            {
                loading
                ? <Loading/>
                : <section className='civilizations-list-container'>
                    {
                    civilizationsData.map((civilization: CivilizationsItem) => <Item key={civilization.id} civilization={civilization}/>)
                    }
                </section>
            }
            </>
    );
};

export default Index;
