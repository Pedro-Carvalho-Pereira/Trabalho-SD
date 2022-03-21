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
  console.log(listGames);

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
    Axios.post("http://localhost:3000/usuario/cadastrar", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      window.location.reload(false);

    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/usuario/listar").then((response) => {
      setListGames(response.data);
    });
  }, [])

  return (
    <>
    <div>
      <div >
        <button style={{ background: 'lightblue', borderRadius: '5px', width: '90px', fontSize: '22px' }} onClick={handleVoltar}>VOLTAR</button>
      </div>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <div className="app--container" style={{ width: '100%' }}>

          <div className="justifyLeft">
            <div className="register--container">
              <h1 className="register--title">
                Cadastrar Tarefa
              </h1>



              <input type="text" name="name" placeholder="Descrição" className="register--input" onChange={handleChangeValues} />
              <input type="text" name="cost" placeholder="Prazo" className="register--input" onChange={handleChangeValues} />
              <input type="text" name="category" placeholder="Completa" className="register--input" onChange={handleChangeValues} />
              <div className="register--div">
                <button className="register--button" onClick={() => handleClickButton()}>Cadastrar</button>
              </div>
            </div>
            {typeof listGames !== "undefined" && listGames.map((value) => {
              return (<Card key={value.id}
                listCard={listGames}
                setListCard={setListGames}
                id={value.id}
                name={value.name}
                cost={value.cost}
                category={value.category}
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