import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';


import './StylesAddTodo.css';

import NovaTarefa from '../../img/new.png';
import api from '../../services/api';

export default function AddTodo() {

    const [name, setName] = useState();
    const [priority, setPriority] = useState();
    const [marcador_name, setMarcador_name] = useState();

    async function handleAddTodo(event) {

        event.preventDefault();


        const data = {
            name,
            priority,
            marcador_name
        }


        try {

            await api.post('todos', data)
                .then(response =>
                    alert('Lista de tarefas adicionada com sucesso!')
                  

                )




        } catch (err) {
            alert('Erro ao realizar cadastro da lista de tarefas')
        }

    }

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

                <form onSubmit={handleAddTodo} >

                    <div className='form-group'>


                        <textarea
                            placeholder="Descrição da tarefa"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Prioridade"
                            value={priority}
                            onChange={e => setPriority(e.target.value)}
                        />

                        <input
                            placeholder="Marcador"
                            value={marcador_name}
                            onChange={e => setMarcador_name(e.target.value)}
                        />

                    </div>

                    <div className='form-button'>

                        <button type="reset"  className="button">Limpar</button>
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