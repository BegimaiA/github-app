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
  },[login])

  return (
    <>
      <Header setSearch={setSearch}/>
      <Route exact path="/:login"> <RepoList repos={repos} search={search} login={login} notFound={notFound} isLoading={isLoading}/>
      </Route>
      <Route exact path="/:login/:repo">  <Readme repo={repo} login={login} setNotFound={setNotFound}/> </Route>
      <Footer/>
    </>
  );
};

export default Home;