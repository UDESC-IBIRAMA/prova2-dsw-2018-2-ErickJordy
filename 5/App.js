import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date(), displayDate;
    displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
    document.getElementById("relogio").innerHTML = displayDate;
}
class App extends Component {
    
  render() {
      
    return (            
      <div className="App">        
        <div id="relogio">carregando</div>           
      </div>
    );
  }
}

export default App;
