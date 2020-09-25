import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaTimesCircle, FaCheck } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { FcEmptyFilter } from 'react-icons/fc';
import { IoMdArrowRoundBack } from 'react-icons/io';
import api from '../../services/api';

import './StylesFiltro.css';

// arrow functions
const ListTodos = () => {


    // const itens = document.getElementById("selectItems");
    const [todos, setTodos] = useState([]);
    // const itemValue = '';
    // const itemSelect = '';
    const [itemSelect, setItemSelect] = useState('');
    const [itemValue, setItemValue] = useState('');

    const color = 'blue';

    
    useEffect(() => {
        reset(); }, []);


    function reset() {

        api.get('/todos')
            .then(response =>
                setTodos(response.data))
    }


    function handlePriority(id) {
        api.get(`listPriority/${id}`)
            .then(response =>
                setTodos(response.data))
    }


    async function handleName() {

        const name = itemValue;

        await api.get('/listName', {
            params: {
                name
            }
        })
            .then(response =>
                setTodos(response.data))


    }

    async function handleMarcador(marcador) {

        const marcador_name = marcador;

        await api.get('/listMarcador', {
            params: {
                marcador_name
            }
        })
            .then(response =>
                setTodos(response.data))


    }

    function handleChange(event) {


        event.preventDefault();
        console.log(itemSelect);
        console.log(itemValue);

        const state = itemSelect;

        console.log(state);

        if (state === 'name') {
            handleName();
        }
        // }
        // else if (state === 'priority') {
        //     handlePriority()
        // }
        // else if (state === 'id') {
        //     handleId();
        // }
        // else if (state === 'marcador') {
        //     handleMarcador();
        // }


    }



    return (
        <div className="container" >

            <div className="container-check">

                <div className="container-title">

                    <div className="top-bar-container">

                        <Link to="/">
                            <IoMdArrowRoundBack size={50} color='black'></IoMdArrowRoundBack>
                        </Link>


                    </div>

                    <div className="header-contend">
                        <h1>Realize aqui os filtros das suas tarefas</h1>
                        <button onClick= {reset}>Reset</button>
                    </div>

                </div>

                <form onSubmit={handleChange}>
                    <select
                        id="selectItems"
                        name="itens"
                        value={itemSelect}
                        onChange={(e) => setItemSelect(e.target.value)}
                    >

                        <option hidden>Selecione uma opção</option>
                        <option value="id"> ID</option>
                        <option value="name"> Nome</option>
                        <option value="priority"> Prioridade</option>
                        <option value="marcador"> Marcador</option>


                    </select>

                    <input
                        value={itemValue}
                        onChange={(e) => setItemValue(e.target.value)}
                        placeholder="Realize a sua busca">

                    </input>

                    <td className={'text-center'}>
                        <button type="submit">
                            <FcEmptyFilter size={50}></FcEmptyFilter>
                        </button>
                    </td>
                </form>

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

                                    <td className={'text-center'}>
                                        <button onClick={() => handlePriority(item.priority)}>
                                            {item.priority}
                                        </button>
                                    </td>

                                    <td className={'text-center'}>

                                        <FaCheck size={20} color="green" />

                                    </td>

                                    <td className={'text-center'}><FaEdit size={20} color='blue' /></td>
                                    {/* editar */}

                                    <td className={'text-center'}>

                                        <FaTrashAlt size={20} color='red' />

                                    </td>

                                    <td className={'text-center'}>
                                        <button onClick={() => handleMarcador(item.marcador_name)} style={{ backgroundColor: color }}>
                                            {item.marcador_name}
                                        </button>
                                        {/* <text className="label_marcador" style={{ backgroundColor: color }}>
                                            {item.marcador_name}
                                        </text> */}

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
                                <td className={'text-center'}>
                                    <button onClick={() => handlePriority(item.priority)}>
                                        {item.priority}
                                    </button>
                                </td>

                                <td className={'text-center'}>

                                    <FaTimesCircle size={20} color={"red"} />

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