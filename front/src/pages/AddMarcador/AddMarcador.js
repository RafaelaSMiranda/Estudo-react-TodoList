import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './StylesAddMarcador.css';


export default function Marcador() {


    return (

        <div className="marcador-container">


            <div className="content">
                <h1>Cadastro do novo Marcador</h1>
                
                <form>
                    <input placeholder="Marcador" />
                    <input placeholder="Cor" />
                </form>

                <div className="content-button">
                    <button type='reset' className="button">Limpar</button>
                    <button type="submit" className="button">Cadastrar</button>
                </div>

                <Link to='/add' className="back-link">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar
                </Link>
            </div>
        </div>
    );
}