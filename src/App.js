import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';

import Cadastro from './pages/Cadastro';
import List from './pages/List';
import Editar from './pages/Editar';
import Navbar from './components/Navbar';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/" component={List}></Route>
                    <Route exact path="/cadastro" component={Cadastro}></Route>
                    <Route exact path="/editar/:id" component={Editar}></Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;