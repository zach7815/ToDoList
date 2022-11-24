import './App.scss';
import React from 'react';
import Header from './components/Header';
import Attribution from './components/Attribution';
import ListContainer from './components/ListContainer';
import ToggleState from './components/ToggleState';


function App({item}) {
  return (
    <div className="App">
<Header/>
<ListContainer/>
<ToggleState/>


<Attribution/>
    </div>
  );
}

export default App;
