import React from 'react'
import { Moon,Sun, PenTool,Trash2, FileText, Bookmark } from 'react-feather';

export default function Header({onClick,theme,onclickPlus,onDelete,saveNotes,showNotes}) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3 className="m-0 font-weight-bold">planner</h3>
      <div>
        <Bookmark  size={16} onClick={showNotes}  className="mr-4"/>
        <FileText size={16} onClick={saveNotes}  className="mr-4"/>
        <PenTool size={16} onClick={onclickPlus}  className="mr-4"/>
        <Trash2 size={16} onClick={onDelete}  className="mr-4"/>
        <button onClick={onClick}>{
          theme === 'light' ? <Moon color="#002856" size={16}/> :  <Sun color="orange" size={16}/>}
        </button>
      </div>
    </div>
  )
}
