import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';


import './StylesAddTodo.css';

import NovaTarefa from '../../img/new.png';

export default function AddTodo() {


    // function handleAddTodo(event) {

    //     event.preventDefault();

    // }

    return (

        <div className="add-container">
            <div className="content">

                <section>

                    <div className="titulo">
                        <img src={NovaTarefa} alt="Nova Tarefa" />
                        <h1>Cadastro</h1>
                    </div>

                    <p>Realize aqui o cadastro da sua nova tarefa. Caso preferir, cadastre também, um novo marcador.</p>
                    <Link to='/' className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                    Voltar
                </Link>

                </section>

                <form>

                    <div className='form-group'>


                        <textarea placeholder="Descrição da tarefa" />
                        <input type="text" placeholder="Prioridade" />
                        <input placeholder="Marcador" />

                    </div>

                    <div className='form-button'>

                        <button type='reset' className="button">Limpar</button>
                        <button type="submit" className="button">Cadastrar</button>

                    </div>

                    <div className="link">
                        <Link to="/addMarcador" className="back-link">
                            <FiArrowRight size={16} color="#e02041" />
                            Cadastrar novo Marcador
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    );

}