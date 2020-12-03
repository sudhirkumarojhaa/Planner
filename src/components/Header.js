import React from 'react'
import { Moon,Sun, PenTool,Trash2, FileText, Bookmark } from 'react-feather';

export default function Header({onClick,theme,onclickPlus,onDelete,saveNotes,showNotes}) {
  return (
    <div className="container-fluid p-5">
      <div className="fixed-top w- 100 d-flex justify-content-between align-items-center p-4 bg-warning">
      <h3 className="m-0 font-weight-bold text-dark">planner</h3>
      <div>
        <Bookmark  size={16}  onClick={showNotes}  className="mr-4 text-dark"/>
        <FileText size={16}  onClick={saveNotes}  className="mr-4 text-dark"/>
        <PenTool size={16}  onClick={onclickPlus}  className="mr-4 text-dark"/>
        <Trash2 size={16}  onClick={onDelete}  className="mr-4 text-dark"/>
        <button onClick={onClick}>{
          theme === 'light' ? <Moon color="#002856" size={16}/> :  <Sun color="#000" size={16}/>}
        </button>
      </div>
      </div>
    </div>
  )
}
