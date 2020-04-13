import React, {useState} from 'react'

import './style.css'
import logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    
    async function handleNewIncident(e){
        e.eventPreventDefault();

        const data = {
            title,
            description,
            value,
        };
        
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization : ongId,
                }
            });
            history.push('/profile');
        } catch (error) {
         alert("error ao cadastra caso, tente novamente.")   
        }
    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logo} alt="be the hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color ="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                    value={title}
                    onChange = {e => setTitle(e.target.value)}
                    placeholder="Titulo do caso"/>
                    <textarea 
                    value={description}
                    onChange = {e => setDescription(e.target.value)}
                    placeholder="Descrição"/>
                    <input 
                    value={value}
                    onChange = {e => setValue(e.target.value)}
                    placeholder="Valor em reais"/>
                
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}