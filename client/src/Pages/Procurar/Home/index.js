import './style.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '../../../components/cards/card';
import { useHistory, useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';


function Cadastrar() {
  const navigate = useNavigate();
  const [values, setValues] = useState();

  const [idProcurado, setIdProurado] = useState();
  const [descricaoProcurado, setDescricaoProurado] = useState();
  const [prazoProcurado, setPrazoProurado] = useState();
  const [completaProcurado, setCompletaProurado] = useState();
  const [jaProcurou, setJaprocurou] = useState(false);





  const [vetor,setVetor] = useState();

  const [listGames, setListGames] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))

  }

  const handleVoltar = () => {
    navigate('/cadastrar', { replace: true });
  }


  const handleClickProcurar = () => {
    setJaprocurou(true);
    Axios.get(`http://localhost:3000/tarefas/${values.identificador}` ,  {
    }).then((response) => {
        setVetor(response.data);
        setIdProurado(response.data.id);

        setDescricaoProurado(response.data.descricao);

        setPrazoProurado(response.data.prazo);
        setCompletaProurado(response.data.completa);


    });
  };



  return (
    <>
      <div>
        <div style={{justifyContent:'space-between', display:'flex'}}>
          <button style={{ background: 'lightblue', borderRadius: '5px', width: '110px', fontSize: '22px' }} onClick={handleVoltar}>Cadastrar</button>
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
              

              {
                idProcurado ? <Card key={idProcurado}
                listCard={listGames}
                  setListCard={setListGames}
                  id={idProcurado}
                  descricao={descricaoProcurado}
                  prazo={prazoProcurado}
                  completa={completaProcurado}
              ></Card> : ''
              }

              {
                jaProcurou ? (idProcurado ? '' : <div style={{width: "36%",textAlign: "center", marginTop: "5%"}}>
                  <h3>Tarefa não encontrada</h3>
                  </div>) : ''
              }


              


            </div>
          </div>

        </div>

        

      </div>

      
    </>
  );
}

export default Cadastrar;