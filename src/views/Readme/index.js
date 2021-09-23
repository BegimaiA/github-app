import React from 'react';
import Markdown from 'markdown-to-jsx';
import {Container} from "react-bootstrap";

const Readme = ({readme}) => {
  return (
   <Container>
     <Markdown>{readme}</Markdown>
   </Container>
  );
};

export default Readme;