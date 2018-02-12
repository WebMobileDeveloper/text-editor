import * as React from 'react';
import './App.css';
import Description from './components/Description';

class App extends React.Component {
  render() {
    return (
      <div id="page">
        <div className="header" >
          Corrector
        </div>          
        <div className="description" >
          <Description contents={''}/> 
        </div>     
        <div className="summary">
          Output
        </div>
        <div className="search">
          Search results
        </div>
        <div className="footer">
          Copyright '2018 Migamake
        </div>
      </div>
    );
  }
}

export default App;

