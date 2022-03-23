import './style.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '../../../components/cards/card';
import { useHistory, useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';


function Cadastrar() {
  const navigate = useNavigate();
  const [values, setValues] = useState();

  const [vetor,setVetor] = useState();

  const [listGames, setListGames] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))

  }

  const handleVoltar = () => {
    navigate('/', { replace: true });
  }


  const handleClickProcurar = () => {
    Axios.get("http://localhost:3000/tarefas/", {
      id: values.identificador
    }).then((response) => {
        setVetor(response.data);
        console.log('resposta:',response);
        console.log('vetor:',vetor);
    });
  };



  return (
    <>
      <div>
        <div style={{justifyContent:'space-between', display:'flex'}}>
          <button style={{ background: 'lightblue', borderRadius: '5px', width: '90px', fontSize: '22px' }} onClick={handleVoltar}>Home</button>
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <div className="app--container" >


            <div className="justifyLeft" >
              <div className="register--container">
                <h1 className="register--title">
                  Procurar Tarefa
                </h1>



                <input type="text" name="identificador" placeholder="Identificador" className="register--input" onChange={handleChangeValues} />
                
                <div className="register--div">
                  <button className="register--button" onClick={() => handleClickProcurar()}>Procurar</button>
                </div>
              </div>
              {typeof listGames !== "undefined" && listGames.map((value) => {
                return (<Card key={value.id}
                  listCard={listGames}
                  setListCard={setListGames}
                  id={value.id}
                  descricao={value.descricao}
                  prazo={value.prazo}
                  completa={value.completa}
                ></Card>);
              })}


              


            </div>
          </div>

        </div>

        

      </div>

      
    </>
  );
}

export default Cadastrar;