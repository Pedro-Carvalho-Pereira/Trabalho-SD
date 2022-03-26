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
    descricao: props.descricao,
    prazo: props.prazo,
    completa: props.completa
  });

  const handleEditGame = () => {
    Axios.put(`http://localhost:3000/tarefas/atualizar/${editValues.id}`, {
      id: editValues.id,
      descricao: editValues.descricao,
      prazo: editValues.prazo,
      completa: editValues.completa
    }).then((response) => {
      handleClose();
      window.location.reload(false);
    });

  };

  const handleDeleteGame = (name_param) => {
    Axios.delete(`http://localhost:3000/tarefas/deletar/${name_param}`, {
      data: {
        descricao: name_param
      }
    }).then((response) => {
      handleClose();
      window.location.reload(false);
    });


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
          id="descricao"
          label="Descrição da Tarefa"
          defaultValue={props.title}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="prazo"
          label="Prazo"
          defaultValue={props.prazo}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="completa"
          label="Completa"
          defaultValue={props.completa}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => { handleDeleteGame(props.id) }} color="primary">
          Excluir
        </Button>
        <Button onClick={() => { handleEditGame() }} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}