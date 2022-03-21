import { useHistory, useNavigate } from 'react-router-dom';
import React, { useState, createContext, useContext } from 'react';
import styles from './styles.css';


function Home() {
    const navigate = useNavigate();


    function handleIrPaisNome() {
        navigate('/cadastrar', { replace: true });
    }



    return (
        <>

            <div className='AlinharDiv' style={{ height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")` }}>
                        <div className='divenglobamensagem' style={{width:'100%'}} >
                            <h1 className='divmensageminicial'>Trabalho API sistemas distribuidos    </h1>


                            

                        </div>

                        <div className='divenglobamsg'>


                        </div>
                        <div className='divenglobabotao' >
                            <button className='botaopaisnome' onClick={handleIrPaisNome}>Cadastrar Tarefas</button>
                        </div>
            </div>
        </>
    );
}

export default Home;