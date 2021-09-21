import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom"
import { Form} from "react-bootstrap";
import "./mainPage.css"
import github from "./github.png"

const MainPage = () => {
  const [inputValue, setInputValue] = useState("")
  const history=useHistory()

  const handleInput =(e) => {
    setInputValue(e.target.value.trim())
  }
  const handleSearch= () => {
    if (inputValue.trim()) {
      history.push(`/${inputValue}`)
      setInputValue("")
    }
  }
  return (
  <div className="main-page-wrapper">
    <div className="input-wrapper p-5">
      <img src={github} width={80}className="mx-auto logo-img" alt=""/>
      <Form>
        <input placeholder="Search" className="me-3 form-control"  value={inputValue} onChange={handleInput}/>
        <button className="btn btn-primary" onClick={handleSearch}>Search user </button>
      </Form>
    </div>
  </div>
  );
};

export default MainPage;