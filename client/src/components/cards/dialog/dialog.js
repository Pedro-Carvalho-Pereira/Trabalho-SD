import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from "axios";

export default function FormDialog(props) {

  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.title,
    cost: props.cost,
    category: props.category,
  });

  const handleEditGame = () => {
    console.log(editValues.id, editValues.name, editValues.cost, editValues.category);
    Axios.put(`http://localhost:3000/usuario/atualizar`, {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category
    }).then((response) => {
      console.log('alterou aqui');
    });
    handleClose();
    window.location.reload(false);






  };

  const handleDeleteGame = (name_param) => {
    console.log(name_param);
    Axios.delete(`http://localhost:3000/usuario/deletar`,{data:  {
      name: name_param
    }}).then((response) => {
      console.log('deletou aqui');
    });
    handleClose();
    window.location.reload(false);

  };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  }

  const handleChangeValues = value => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }


  return (
    <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Descrição da Tarefa"
          defaultValue={props.title}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="cost"
          label="Prazo"
          defaultValue={props.cost}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="category"
          label="Completa"
          defaultValue={props.category}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => {handleDeleteGame(props.title)}} color="primary">
          Excluir
        </Button>
        <Button onClick={() => {handleEditGame()}} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}