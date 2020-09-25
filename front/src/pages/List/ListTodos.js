import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaTimesCircle, FaCheck } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import api from '../../services/api';

import './StylesListTodo.css';

import ImagemTarefa from '../../img/checklist.png';

// arrow functions
const ListTodos = () => {


    const [todos, setTodos] = useState([]);

    const color = 'blue';



    useEffect(() => {
        api.get('/todos')
            .then(response => {
                setTodos(response.data);

            })

    }, [todos]);
    // sempre quando 'todos' mudar, a lista será atualizada



    function handleComplete(id) {

        api.get(`todos/complete/${id}`)
            .then(response =>
                setTodos([]))

    }

    function handleCancel(id) {


        api.get(`todos/cancel/${id}`)
            .then(response =>
                setTodos([]))
        // fazendo este set, eu mudo o estado do "todos" e forço uma atualização

    }

    function handleDelete(id) {

        api.delete(`/todos/${id}`)
            .then(response =>
                setTodos([]))
    }

    // function handlePriority(id) {
    //     api.get(`listPriority/${id}`)
    //         .then(response =>
    //             setTodos(response.data))
    // }



    return (
        <div className="container" >

            <div className="container-check">

                <div className="containerTitle">

                        <h1>Lista de tarefas</h1>

                    </div>

                    <header>

                        <Link to='/add' className="button">Cadastrar</Link>
                        <img src={ImagemTarefa} alt="Imagem de tarefa" />
                        <Link to='/filtroList' className="button">Filtrar</Link>

                    </header>


                </div>


                <div className="list-pendente">
                    <h2 className='text-danger'>Lista  de tarefas pendentes</h2>

                    {/* <a href='/todo/add' className='btn btn-outline-primary'>Adicionar</a> */}

                    <table className="table  table-hover table-striped">
                        {/* classe base */}

                        <thead>

                            <th className={'text-center'}>ID</th>
                            <th className={'text-center'}>Tarefas</th>
                            <th className={'text-center'}>Prioridade</th>
                            <th className={'text-center'}>Concluir</th>
                            <th className={'text-center'}>Editar</th>
                            <th className={'text-center'}>Excluir</th>
                            <th className={'text-center'}><FiPaperclip size={20} color='black'></FiPaperclip></th>

                        </thead>

                        <tbody>

                            {
                                todos.filter(item => item.completed === 0).map(item => (

                                    <tr key={item.id}>
                                        <td className={'text-center'}>{item.id}</td>

                                        <td className={'text-center'}>{item.name}</td>

                                        {/* <td className={'text-center'}>
                                        <button onClick={() => handlePriority(item.priority)}>
                                            {item.priority}
                                        </button>
                                    </td> */}

                                        <td className={'text-center'}>
                                            <Link to="/filtroList" className="link_filter">
                                                {item.priority}
                                            </Link>
                                        </td>

                                        <td className={'text-center'}>
                                            <button onClick={() => handleComplete(item.id)}  >
                                                <FaCheck size={20} color="green" />
                                            </button>
                                        </td>

                                        <td className={'text-center'}><Link to={`/todos/cancel/${item.id}`}><FaEdit size={20} color='blue' /></Link></td>
                                        {/* editar */}

                                        <td className={'text-center'}>
                                            <button onClick={() => handleDelete(item.id)}>
                                                <FaTrashAlt size={20} color='red' />
                                            </button>
                                        </td>

                                        <td className={'text-center'}>
                                        <button onClick={'/filtroList'} style={{ backgroundColor: color }}>
                                            {item.marcador_name}
                                        </button>

                                        </td>
                                    </tr>
                                ))}

                        </tbody>

                        <tfoot>

                        </tfoot>

                    </table>

                </div>

                <div className="list-concluido">
                    <h2 className='text-success'>Lista de tarefas concluídas</h2>

                    <table className="table table-hover table-striped">
                        {/* classe base */}

                        <thead>

                            <tr>

                                <th className={'text-center'}>ID</th>
                                <th className={'text-center'}>Tarefas</th>
                                <th className={'text-center'}>Prioridade</th>
                                <th className={'text-center'}>Cancelar</th>

                            </tr>

                        </thead>

                        <tbody>

                            {todos.filter(item => item.completed === 1).map(item => (
                                <tr key={item.id}>
                                    <td className={'text-center'}>{item.id}</td>
                                    <td className={'text-center'}>{item.name}</td>
                                    <td className={'text-center'}>{item.priority}</td>

                                    <td className={'text-center'}>
                                        <button onClick={() => handleCancel(item.id)}>
                                            <FaTimesCircle size={20} color={"red"} />
                                        </button>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                        <tfoot>

                        </tfoot>

                    </table>
                </div>
            </div >


    );

}


export default ListTodos;