import React from 'react';
import {Link} from "react-router-dom"
import {Container} from "react-bootstrap";
import NotFound from "../../components/NotFound";
import SpinnerComp from "../../components/SpinnerComp";

const RepoList = ({repos, search,login, isLoading, notFound}) => {
  const filteredRepos = repos.filter(el => el.name.toLowerCase().includes(search))
  console.log(isLoading)
  console.log(notFound)

  if(isLoading) {
    return <SpinnerComp/>
  }

  if(notFound){
    return <NotFound/>
  }

  return (
    <>
      <Container>
        <table border="1" className="table my-5 table-bordered table-striped my-3" cellPadding="15" width="600px"
               cellSpacing="0">
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
                <td><Link to={{pathname: item.homepage}} target="_blank"> Go</Link></td>
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