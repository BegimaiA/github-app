import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom"
import { Form} from "react-bootstrap";
// import "./mainPage.css"

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
     <Form>
       <input placeholder="Search" className="text-center"  value={inputValue} onChange={handleInput}/>
       <button className="btn btn-primary" onClick={handleSearch}>Search </button>
     </Form>
  );
};

export default MainPage;