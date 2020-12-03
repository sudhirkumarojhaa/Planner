import moment from 'moment';
import React,{useState,useEffect} from 'react'
import { Button,Form,Modal } from 'react-bootstrap';

export default function NotesBox({show,handleClose,handleLevel}) {
  const [text,setText]=useState('');
  const [notes,setNotes]=useState([]);

  useEffect(() => {
    if(localStorage.getItem('notes')){
      var arr = JSON.parse(localStorage.getItem('notes'));
      setNotes(arr)
    }
  }, [text])

  const saveList=()=>{
    var arr = JSON.parse(localStorage.getItem('notes')) || [];
    const obj = {
      text: text,
      key: moment().unix(),
    }
    var saveArr = [...arr,obj];
    localStorage.setItem('notes',JSON.stringify(saveArr));
    window.location.reload(false);
  }

  return (
      <Modal show={show} onHide={handleClose}
        size="lg"
        centered
      >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
          create notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder="add your notes here" value={text} rows={15} onChange={e=> setText(e.target.value)} maxLength="500"/>
          </Form.Group>
        </Form>
      </Modal.Body>
      {text?
      <Modal.Footer>
        <Button variant="primary" size="lg" block onClick={saveList}>
          create
        </Button>
      </Modal.Footer>
      : null }
    </Modal>
  )
}
