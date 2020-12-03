
import React,{useState,useEffect} from 'react'
import {Modal } from 'react-bootstrap';
import {X } from 'react-feather';

import src from '../m.png';

export default function ListBox({show,handleClose,handleLevel}) {
  const [data,setData]=useState([]);

  useEffect(() => {
    saveList();
  }, [])

  const saveList=()=>{
    var arr = JSON.parse(localStorage.getItem('notes')) || [];
    setData(arr)
  }

  const handleDelete=(id)=>{
    var arr = JSON.parse(localStorage.getItem('notes')) || [];
    var updatedArr = arr.filter(item=> item.key !== id);
    localStorage.setItem('notes',JSON.stringify(updatedArr));
    setData(updatedArr)
  }

  return (
      <Modal show={show} onHide={handleClose}
        size="lg"
      >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
          my notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4 w-100 d-flex flex-wrap">
        {data.length !==0 ?
          data.map(item=>
          <div className="card p-4 m-2 w-100">
            <p className="font-weight-bold text-dark">{item.text}</p>
            <div className="abs"> <X size={14} color={'#000'} onClick={()=> handleDelete(item.key)}/></div>
          </div>
          )
        : <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <img src={src} alt="no" className="w-75 align-self-center"/>
          <h6 className="mt-2 text-center font-weight-bold text-dark">no saved notes found</h6>
      </div>
        }
      </Modal.Body>
    </Modal>
  )
}
