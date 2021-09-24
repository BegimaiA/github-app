import React, {useEffect, useState} from 'react';
import Markdown from 'markdown-to-jsx';
import {Container} from "react-bootstrap";
import "./readme.css"
import axios from "axios";

const Readme = ({login, repo, setNotFound}) => {
  const [readme, setReadme] = useState("")
  useEffect(()=>{
      axios(`https://api.github.com/repos/${login}/${repo}/readme`,
        {headers: { 'Accept': 'application/vnd.github.raw' }})
        .then(({data})=>setReadme(data))
        .catch(()=>setNotFound(true))
      }, [login, repo, setNotFound])

  return (
   <Container>
     <Markdown className="readme mt-3">{readme}</Markdown>
   </Container>
  );
};

export default Readme;