import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Markdown from 'markdown-to-jsx';


const Readme = () => {
  const [readme, setReadme] = useState("")
  const {login, repo} =useParams()
  useEffect(()=>{
    axios(`https://api.github.com/repos/${login}/${repo}/readme`,
      {headers: { 'Accept': 'application/vnd.github.raw' }})
      .then(({data})=>setReadme(data))
  },[login, repo])

  return (
readme
    // <Markdown>readme</Markdown>


  );
};

export default Readme;