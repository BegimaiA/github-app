import React, { useState} from 'react';
import {Link} from "react-router-dom"
import {Container} from "react-bootstrap";
import NotFound from "../../components/NotFound";
import Spinner from "../../components/Spinner";


const RepoList = ({repos, search,login}) => {

  const [notFound, setNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const filteredRepos = repos.filter(el => el.name.toLowerCase().includes(search))

  // if (isLoading) {
  //   return <Spinner/>
  // }
  // if (notFound){
  //   return <NotFound/>
  // }

  return (
    <>
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
                <td> <Link to={`/${login}/${item.name}`} className="text-decoration-none">Readme</Link></td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
    </>
  )};

export default RepoList;