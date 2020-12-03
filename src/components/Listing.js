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
      <input type="text" placeholder="search an item ..." className="w-100 p-2" onChange={e=> setName(e.target.value)}></input>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <p className="mt-2 font-weight-bold">sort by priority :</p>
        <div className="d-flex justify-content-start align-items-center">
          <Priority  bg="green" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="orange" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="#0cf" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="red" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="yellow" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
          <Priority  bg="purple" onClick={(e)=> setLevel(e.target.style.backgroundColor)}/>
        </div>
      </div>
      {level ?
      <div className="d-flex justify-content-start align-items-center mt-2">
        <p className="font-weight-bold mt-2">now showing results for :</p>
        <div style={{backgroundColor: level, width: 25,height: 25, marginLeft: 20}}></div>
        <Button className="button ml-4" variant="primary" size="sm" onClick={()=> setLevel('')}>
          show all results
        </Button>
      </div> : null}
      <div className="over">
      {searchArray && searchArray.length !== 0 ?
      searchArray.map(item=>
        <div key={item.key} className="d-flex justify-content-between my-4">
           <div className="d-flex">
           <div style={{backgroundColor: item.level, width: 10,height: 95}}></div>
            <div>
              <div className="border dateBox px-4 py-2">
                <h4 className="date">{moment.unix(item.key).format("DD")}</h4>
                <h6 className="date">{moment.unix(item.key).format("MMM")}</h6>
              </div>
              <div className="border d-flex justify-content-center align-items-center">
               <span className="text-center">{moment.unix(item.key).format("hh:mm A")}</span>
              </div>
            </div>
            <div className="ml-4 flex-column d-flex justify-content-between">
              <p className="font-weight-bold">{item.text}</p>
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
