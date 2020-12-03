import moment from 'moment';
import React,{useState} from 'react'
import { Button,Form,Modal } from 'react-bootstrap';
import Priority from './Priority';

export default function ModalBox({show,handleClose,handleLevel}) {
  const [text,setText]=useState('');
  const [level,setLevel]=useState('');

  const saveList=()=>{
    var arr = JSON.parse(localStorage.getItem('item')) || [];
    const obj = {
      text: text,
      level: level,
      key: moment().unix(),
    }
    var saveArr = [...arr,obj];
    localStorage.setItem('item',JSON.stringify(saveArr));
    window.location.reload(false);
  }

  return (
      <Modal show={show} onHide={handleClose}
        size="lg"
        centered
      >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
          create my task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-dark">agenda:</Form.Label>
            <Form.Control as="textarea" placeholder="add your tasks here"  rows={5} onChange={e=> setText(e.target.value)} maxLength="100"/>
          </Form.Group>
          <Form.Label className="text-dark">priority:</Form.Label>
          <div className="d-flex justify-content-start align-items-center">
            <Priority bg="green" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
            <Priority bg="orange" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
            <Priority bg="#0cf" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
            <Priority bg="red" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
            <Priority bg="yellow" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
            <Priority bg="purple" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
        </div>
        </Form>
      </Modal.Body>
      {text && level ?
      <Modal.Footer>
        <Button variant="primary" size="lg" block onClick={saveList}>
          create
        </Button>
      </Modal.Footer>
      : null }
    </Modal>
  )
}
