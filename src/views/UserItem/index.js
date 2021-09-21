import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"
import Header from "../../components/Header";
import {Container} from "react-bootstrap";
import Footer from "../../components/Footer";

const UserItem = () => {
  const [repos, setRepos] = useState([])
  const params=useParams()
  const[search, setSearch] = useState("")
  const filteredRepos = repos.filter(el=>el.name.toLowerCase().includes(search))

  useEffect(()=> {
    axios(`https://api.github.com/users/${params.login}/repos`)
      .then(({data})=>setRepos(data) )
  },[params.login])
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Header handleSearch={handleSearch} />
     <Container>
       <table  border="1"  className="table my-5 table-bordered table-striped my-3" cellPadding="15"  width="600px" height="50px" cellSpacing="0">
         <thead>
         <tr valign="center">
           <th>Name</th>
           <th>Deployment</th>
           <th>Last commit</th>
           <th>Readme</th>
         </tr>
         </thead>
         <tbody>
         {
           filteredRepos.map(item=>
             <tr>
               <td>  {item.name}</td>
               <td>   Go</td>
               <td>   {item.updated_at}</td>
               <td>   Readme </td>
             </tr>
           )
         }
         </tbody>
       </table>
     </Container>
      <Footer/>
    </div>
  );
};

export default UserItem;