import React from 'react';
import List from 'components/civilizations/List';
import Error from 'components/common/Error';
import Header from 'components/common/Header';
import './App.css';

function App() {
  return (
      <div className='container'>
          <Header />
          <List />
          <Error />
      </div>
  );
}

export default App;
