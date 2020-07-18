import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// roteamento
// definindo as rotas que definirão os caminhos de navegação
// pagina principal -> /
// adicionar -> /todo/add
// atualizar -> qual ID quer atualizar (passar na propria rota) -> /todo/update=4

import ListTodo from './pages/ListTodos';
import AddTodo from './pages/AddTodo';
import UpdateTodo from './pages/UpdateTodo';


export default function Routes(){

    return (

        <BrowserRouter>
        
        <Route path='/' exact component={ListTodo}/>
        <Route path='/add' exact component={AddTodo}/>
        <Route path='/update/:id' component={UpdateTodo}/>

        </BrowserRouter>

    );




}