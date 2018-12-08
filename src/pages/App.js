import React, { Component } from 'react';

import './App.css';
//tudo que for boootstrap
import { Container} from 'reactstrap';
//tudo que for rotas 
import{  Link, Route, BrowserRouter, Switch} from 'react-router-dom';


import HomePage from './HomePage';
import TarefasPage from './TarefasPage';
import SobrePage from './SobrePage';
import loginPage from './LoginPage';
import PrivateRoute from '../components/PrivateRoute';
import Menu from '../components/menu';




class App extends Component {
 
  render() {
  
    return (
      <BrowserRouter>
        <Container>

          <Menu/>

          <Switch>
          <Route exact path="/"  component={HomePage}/>
          <PrivateRoute path="/tarefas" component={TarefasPage}/>
          <Route path="/sobre" component={SobrePage}/>
          <Route path="/login" component={loginPage}/>
          <Route render={() => {
            return(
              <div><h1>404</h1>Pagina nao encontrada</div>
            );
          }}/>
          </Switch>
        </Container>
      </BrowserRouter>
      
    );
  }
}

export default App;
