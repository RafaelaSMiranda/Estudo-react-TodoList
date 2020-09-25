import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// roteamento
// definindo as rotas que definirão os caminhos de navegação
// pagina principal -> /
// adicionar -> /todo/add
// atualizar -> qual ID quer atualizar (passar na propria rota) -> /todo/update=4

import ListTodo from './pages/List/ListTodos';
import AddTodo from './pages/AddTodo/AddTodo';
// import UpdateTodo from './pages/UpdateTodo/UpdateTodo';
import AddMarcador from './pages/AddMarcador/AddMarcador';
import FiltroList from './pages/FiltroList/Filtro';


export default function Routes(){

    return (

        <BrowserRouter>
        
        <Route path='/' exact component={ListTodo}/>
        <Route path='/add' exact component={AddTodo}/>
        {/* <Route path='/update/:id' component={UpdateTodo}/> */}
        <Route path='/addMarcador' component={AddMarcador}/>
        <Route path='/filtroList' component={FiltroList}/>

        </BrowserRouter>

    );




}