import React, { useState,  } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/style";
import { lightTheme, darkTheme } from "./components/theme"
import "./App.css";
import Header from "./components/Header";
import ModalBox from "./components/ModalBox";
import Listing from "./components/Listing";
import NotesBox from "./components/NotesBox";
import ListBox from "./components/ListBox";


const App = () => {
  const [theme, setTheme] = useState('dark');
  const [showBar, setShowBar] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [list,setList]=useState(false);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const handleToggle=()=>{
    setShowBar(true)
  }

  const showNotesModal=()=>{
    setShowNotes(true)
  }

  const listNotes=()=>{
    setList(true);
  }

  const handleDelete=()=>{
    localStorage.clear();
    window.location.reload(false);
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
      <GlobalStyles/>
      <div className="app">
        <div className="container">
          <Header
            onClick={themeToggler}
            theme={theme}
            onclickPlus={()=> handleToggle()}
            saveNotes={()=> showNotesModal()}
            showNotes={()=> listNotes()}
            onDelete={()=> handleDelete()}/>
            {list ? <ListBox show={list} handleClose={()=> setList(!list)}/>  : null}
            {showBar ? <ModalBox show={showBar} handleClose={()=> setShowBar(!showBar)}/>  : null}
            {showNotes ? <NotesBox show={showNotes} handleClose={()=> setShowNotes(!showNotes)}/>  : null }
            <Listing/>
         </div>
       </div>
      </>
    </ThemeProvider>
  );
};

export default App;