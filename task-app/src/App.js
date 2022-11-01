import './App.scss';
import React from 'react';
import Header from './components/Header';
import Attribution from './components/Attribution';
import ListContainer from './components/ListContainer';
import ToggleState from './components/ToggleState';
import ItemCount from './components/ItemCount';




function App() {
  return (
    <div className="App">
<Header/>
<ListContainer/>
<ItemCount/>
<ToggleState/>
<Attribution/>
    </div>
  );
}

export default App;
