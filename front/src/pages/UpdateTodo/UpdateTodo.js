import React from 'react';
import { Link } from 'react-router-dom';

export default function UpdateTodo() {


    function handleUpdateTodo(event) {

        event.preventDefault();


    }

    return (

        <div className="container">

            <p className="text-info"> ID: 10</p>
            <div className="container-form">

                <form onSubmit={handleUpdateTodo}>

                    <h2>Editar tarefa</h2>
                    <div className='form-group'>

                        <div class="col-sm-5">
                            <label>Descrição da tarefa</label>
                            <textarea className='form-control ' />
                        </div>
                    </div>

                    <div className='form-group'>

                        <div class='col-sm-1'>
                            <label>Prioridade</label>
                            <select multiple class="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        {/* <label>Prioridade</label>
                    <input placeholder="Prioridade da tarefa" className='form-control' /> */}

                    </div>

                    <div className='form-group'>

                        <div class='col-sm-3'>
                            <label>Marcador</label>
                            <select multiple class="form-control">

                                <option>Faculdade</option>
                                <option>Trabalho</option>
                                <option>Pessoal</option>
                                <option>Família</option>
                                <option>Amigos</option>
                            </select>

                            <br></br>
                            <label>Cadastrar novo marcador: </label>
                            <input className="form-control"></input>
                        </div>
                       
                    </div>

                    {/* <img src="/img/checklist.png" class="rounded mx-auto d-block"></img> */}

                    <div className='form-group form-check'>

                        <button type='reset' className='btn btn-outline-primary mr-2'>Limpar</button>
                        <button type="submit" className='btn btn-outline-danger mr-2'>Cadastrar</button>


                        <Link to='/' className='btn btn-outline-primary mr-2'>

                            Voltar
                            
                        </Link>



                    </div>

                </form>
            </div>
        </div>
    );

}