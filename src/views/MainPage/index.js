import React, {useState} from 'react';
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
      <img src={github} width={80} className="mx-auto logo-img" alt=""/>
      <h3 className="text-white text-center mt-4">Search user's repository</h3>
      <Form className="d-flex justify-content-center mt-3">
        <input placeholder="enter login" className="me-3 rounded-3 ps-3 input-group-sm main-input"  value={inputValue} onChange={handleInput}/>
        <button className="btn btn-primary" onClick={handleSearch}>Search </button>
      </Form>
    </div>
  </div>
  );
};

export default MainPage;