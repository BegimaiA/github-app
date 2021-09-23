import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Route, useParams} from "react-router-dom";
import RepoList from "../RepoList";
import Readme from "../Readme";
import axios from "axios";

const Home = () => {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState("")
  const [readme, setReadme] = useState("")
  const [notFound, setNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const {login, repo} =useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${login}/repos`)
      .then(({data}) => {
        setRepos(data)
      })
    .catch(()=>setNotFound(true))
    .finally(()=>setIsLoading(false))

   if(repos !==undefined) {
     axios(`https://api.github.com/repos/${login}/${repo}/readme`,
       {headers: { 'Accept': 'application/vnd.github.raw' }})
       .then(({data})=>setReadme(data))
   }
  },[login, repo, repos])

  return (
    <>
      <Header setSearch={setSearch}/>
      <Route exact path="/:login"> <RepoList repos={repos} search={search} login={login} notFound={notFound} isLoading={isLoading}/>

      </Route>
      <Route exact path="/:login/:repo">  <Readme readme={readme}/> </Route>
      <Footer/>
    </>
  );
};

export default Home;