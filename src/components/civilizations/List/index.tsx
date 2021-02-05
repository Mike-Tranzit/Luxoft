import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestData} from 'store/actions/civilizationsActions';

const Index = () => {

    const dispatch = useDispatch();
    const loadDataHandler = useCallback(() => dispatch(requestData()), [dispatch]);

    useEffect(() => {
        loadDataHandler();
    }, []);

    return (
        <div>

        </div>
    );
};

export default Index;
