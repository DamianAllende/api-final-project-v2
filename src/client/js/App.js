import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
import Demos from './Demos';
import Ventas from './components/Ventas';
import RegistroCliente from './components/RegistroCliente';
import RegistroProducto from './components/RegistroProducto';
import Reporte from './components/Reporte';



class App extends Component {
  render (){
    return <div>
      <Switch>
        <Route exact path='/' component={Ventas}/>
		    <Route exact path='/productos' component={RegistroProducto}/> 
        <Route exact path='/clientes' component={RegistroCliente}/> 
        <Route exact path='/reportes' component={Reporte}/>        
      </Switch>
    </div>
  }
}

ReactDOM.render(<Router>
  <App/>
</Router>, document.getElementById('app-container'));
