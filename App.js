import React from "react";
import './App.css';
import addContact from "./components/List/addContact/addContact";
import editList from "./components/List/editList/editList";
import List from "./components/List/list/List";
import viewList from "./components/List/viewList/viewList";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


let App = () => {
  return (
    <React.Fragment>
      <NavBar />
        <Routes>
          <Route path={"/"}  />
          <Route path={"/List/List"} element={<List/>}/>
          <Route path={"/List/add"} element={<addContact/>}/>
          <Route path={"/List/edit/:id"} element={<editList/>}/>
          <Route path={"/List/view/:id"} element={<viewList/>}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;
