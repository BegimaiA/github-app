import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom"
import Header from "../../components/Header";
import {Container} from "react-bootstrap";
import Footer from "../../components/Footer";
import NotFound from "../../components/NotFound";
import Spinner from "../../components/Spinner";
import Readme from "../Readme";

const RepoList = () => {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState("")
  const [notFound, setNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  const filteredRepos = repos.filter(el => el.name.toLowerCase().includes(search))

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  useEffect(() => {
    axios(`https://api.github.com/users/${params.login}/repos`)
      .then(({data}) => {
        setRepos(data)
      })
      // .catch(()=>setNotFound(true))
      // .finally(()=>setIsLoading(false))
  },[params.login] )

  // if (isLoading) {
  //   return <Spinner/>
  // }
  // if (notFound){
  //   return <NotFound/>
  // }
  return (
    <>
      <Header handleSearch={handleSearch}/>
      <Container>
        <table border="1" className="table my-5 table-bordered table-striped my-3" cellPadding="15" width="600px"
               height="50px" cellSpacing="0">
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
            filteredRepos.map(item =>
              <tr key={item.id}>
                <td>  {item.name}</td>
                <td> Go</td>
                <td>   {item.updated_at}</td>
                <td> <Link to={`/${params.login}/${item.name}`} className="text-decoration-none">Readme</Link></td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
      <Footer/>
    </>
  )};

export default RepoList;