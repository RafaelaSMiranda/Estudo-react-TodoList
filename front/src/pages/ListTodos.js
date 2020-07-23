import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaTimesCircle, FaCheck } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { FcEmptyFilter } from 'react-icons/fc';

import './StylesListTodo.css';

import ImagemTarefa from '../img/checklist.png';

// arrow functions
const ListTodos = () => {


    return (
        <div className="container" >

            <h1>Lista de Tarefas !</h1>

            <div className="container-check">

                <header>

                    <img src={ImagemTarefa} alt="Imagem de tarefa" />
                    <Link to='/add' className="button">Cadastrar</Link>

                </header>

                <form>

                    <input placeholder="Realize a sua busca"></input>
                    <Link to='/' className="button"><FcEmptyFilter size={20} color='black'></FcEmptyFilter></Link>

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

                        <tr>
                            <td className={'text-center'}>1</td>
                            <td className={'text-center'}>Criar o backend da aplicação</td>
                            <td className={'text-center'}><Link to='/' className='btn'>1</Link></td>
                            <td className={'text-center'}> <Link to='/add'><FaCheck size={20} color="green" /> </Link> </td>
                            <td className={'text-center'}><Link to="/update/2"><FaEdit size={20} color='blue' /></Link></td>
                            <td className={'text-center'}> <FaTrashAlt size={20} color='red' /> </td>
                            <td className={'text-center'}><Link to='/' className='btn btn-danger'>Faculdade</Link></td>
                        </tr>

                        <tr>
                            <td className={'text-center'}>2</td>
                            <td className={'text-center'}>Realizar novos orçamentos</td>
                            <td className={'text-center'}><Link to='/' className='btn'>2</Link></td>
                            <td className={'text-center'}> <a href='/todo/end/2'><FaCheck size={20} color="green" /> </a> </td>
                            <td className={'text-center'}><Link to="/update/2"><FaEdit size={20} color='blue' /></Link></td>
                            <td className={'text-center'}> <FaTrashAlt size={20} color='red' /> </td>
                            <td className={'text-center'}><Link to='/' className='btn btn-dark'>Trabalho</Link></td>
                        </tr>

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

                        <tr>
                            <td className={'text-center'}>1</td>
                            <td className={'text-center'}>Criar o backend da aplicação</td>
                            <td className={'text-center'}>1</td>
                            <td className={'text-center'}> <a href='/todo/end/2'><FaTimesCircle size={20} color={"red"} /> </a> </td>

                        </tr>

                    </tbody>

                    <tfoot>

                    </tfoot>

                </table>
            </div>
        </div>


    );

}


export default ListTodos;