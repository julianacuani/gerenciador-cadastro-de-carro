import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';

import Cadastro from './Cadastro';
import Home from './Home';
import List from './List';
import NovoIdcarro from './NovoIdcarro';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <h1 className="meu-app">Gerencia do cadastro de carros</h1>

                    <Route path="/" exact component={Home}></Route>

                    <p> <Link to="/">Início</Link> </p>
                    <p> <Link to="/lista">Veja lista de carros cadastrados</Link> </p>
                    <p> <Link to="/cars">Cadastre novo carro</Link> </p>
                    <p> <Link to="/cars/123">Cadastre novo id carro</Link> </p>

                    <Route exact path="/lista" component={List}></Route>
                    <Route exact path="/cars" component={Cadastro}></Route>
                    <Route exact path="/cars/:id" component={NovoIdcarro}></Route>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;