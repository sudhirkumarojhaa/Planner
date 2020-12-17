import React,{useState,useEffect} from 'react'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Priority from "./Priority";
import {Trash2} from 'react-feather';
import src from '../c.png';

export default function Listing() {
  const [list,setList]=useState([]);
  const [name,setName]=useState('');
  const [level,setLevel]=useState('');

  useEffect(() => {
   fetchLists();
  }, [])

  const fetchLists=()=>{
    const rem = localStorage.getItem('item');
    var listUpdated = JSON.parse(rem);
    setList(listUpdated);
  }

  const deleteItem=(id)=>{
    var arr = JSON.parse(localStorage.getItem('item')) || [];
    var updatedArr = arr.filter(item=> item.key !== id);
    localStorage.setItem('item',JSON.stringify(updatedArr));
    window.location.reload(false);
  }

  const searchArray = level.length !== 0 ? list && list.filter(item =>  {
    if(item.level === level) return item}) :
    list && list.filter(item => {
    if(name === '') return item;
    if (item.text.toLowerCase().includes(name.toLowerCase())) return item;
  }).reverse();

  return (
    <div className="mt-4 list">
      <h6 className="font-weight-bold mb-3">showing {searchArray && searchArray.length} results</h6>
      <input type="text" placeholder="search an item here..." className="w-100 p-2 search" onChange={e=> setName(e.target.value)}></input>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <p className="mt-2 font-weight-bold">sort by priority :</p>
        <div className="d-flex justify-content-start align-items-center">
          <Priority  bg="#99feaf" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="orange" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="#70ddf7" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="#fb6a6b" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="#fff36d" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="#73e3fd" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
        </div>
      </div>
      {level ?
      <div className="d-flex justify-content-start align-items-center mt-2">
        <p className="font-weight-bold mt-2">now showing results for :</p>
        <div style={{backgroundColor: level, width: 30,height: 30, marginLeft: 20,borderRadius: 30}}></div>
        <Button className="button ml-4" variant="primary" size="sm" onClick={()=> setLevel('')}>
          show all results
        </Button>
      </div> : null}
      <div className="over">
      {searchArray && searchArray.length !== 0 ?
      searchArray.map(item=>
        <div key={item.key} className="d-flex justify-content-between my-4">
            <div className="flex-column w-100 bg py-1 mt-4 d-flex justify-content-between">
              <h3 className="font-weight-bold">{item.text}</h3>
              <div className="d-flex my-4">
                <div style={{backgroundColor: item.level, width: 20,height: 20, borderRadius: 30}}></div>
                <h6 className="font-weight-bold mx-3">{moment.unix(item.key).format("DD MMMM,   YYYY")}</h6>
                <h6 className="font-weight-bold mx-3">{moment.unix(item.key).format("hh:mm A")}</h6>
                <Trash2 size={16} onClick={()=> deleteItem(item.key)}  className="mr-4"/>
              </div>
          </div>
        </div>
      ) :
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <p className="text-center">no saved cards found.</p>
        <img src={src} alt="no" className="w-25 align-self-center"/>
        <p className="text-center">you can always start fresh by clicking on the pen icon in the header.</p>
      </div>
      }
      </div>
    </div>
  )
}
