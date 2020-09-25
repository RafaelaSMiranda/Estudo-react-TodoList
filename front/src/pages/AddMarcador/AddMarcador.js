import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './StylesAddMarcador.css';
import api from '../../services/api';


export default function Marcador() {


    const [name, setName] = useState('');
    const [cor, setCor] = useState('');

    async function handleAddMarcador(e) {

        e.preventDefault();

        console.log('entrou')

        const data = {
            name,
            cor
        }

        console.log(data);

        try {

            await api.post('marcadores', data)
                .then(response =>
                    alert('Marcador cadastrado com sucesso'))

        } catch (err) {
            alert('Erro ao cadastrar marcador, tente novamente mais tarde.')
        }

    }

    return (

        <div className="marcador-container">

            <div className="content">
                <h1>Cadastro do novo Marcador</h1>

                <form onSubmit={handleAddMarcador}>
                    <div className="form_div">
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Marcador"
                        />

                        <input
                            placeholder="Cor"
                            value={cor}
                            onChange={e => setCor(e.target.value)}
                        />

                    </div>

                    <div className="content-button">
                        <button type='reset' className="button">Limpar</button>
                        <button type="submit" className="button">Cadastrar</button>
                    </div>

                    <Link to='/add' className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                    Voltar
                </Link>

                </form>
            </div>
        </div >
    );
}