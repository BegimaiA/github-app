import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Container} from "react-bootstrap";


const Readme = () => {
  const [readme, setReadme] = useState("")
  const {login, repo} =useParams()
  useEffect(()=>{
    axios(`https://api.github.com/repos/${login}/${repo}/readme`,
      {headers: { 'Accept': 'application/vnd.github.raw' }})
      .then(({data})=>setReadme(data))
  },[login, repo])

  return (
<>
  <Header/>
   <Container>
     <Markdown>{readme}</Markdown>
   </Container>
<Footer/>
</>
  );
};

export default Readme;