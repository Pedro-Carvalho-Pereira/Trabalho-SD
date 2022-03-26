import './style.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '../../components/cards/card';
import { useHistory, useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';


function Cadastrar() {
  const navigate = useNavigate();
  const [values, setValues] = useState();
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




  const handleClickButton = () => {
    Axios.post("http://localhost:3000/tarefas", {
      descricao: values.descricao,
      prazo: values.prazo,
      completa: values.completa,
    }).then((response) => {
      window.location.reload(false);

    });
  };

  const handleProcurarButton = () => {
    navigate('/Procurar', { replace: true });


  };

  useEffect(() => {
    Axios.get("http://localhost:3000/tarefas").then((response) => {
      setListGames(response.data);
    });
  }, [])

  return (
    <>
      <div>
        <div style={{justifyContent:'space-between', display:'flex'}}>
          <button style={{ background: 'lightblue', borderRadius: '5px', width: '90px', fontSize: '22px' }} onClick={handleVoltar}>Home</button>
          <button onClick={() => handleProcurarButton()} style={{ background: 'lightblue', borderRadius: '5px', width: '220px', fontSize: '22px' }}>Procurar Tarefa</button>
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <div className="app--container" >


            <div className="justifyLeft" >
              <div className="register--container">
                <h1 className="register--title">
                  Cadastrar Tarefa
                </h1>



                <input type="text" name="descricao" placeholder="Descrição" className="register--input" onChange={handleChangeValues} />
                <input type="text" name="prazo" placeholder="Prazo" className="register--input" onChange={handleChangeValues} />
                <input type="text" name="completa" placeholder="Completa" className="register--input" onChange={handleChangeValues} />
                <div className="register--div">
                  <button className="register--button" onClick={() => handleClickButton()}>Cadastrar</button>
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