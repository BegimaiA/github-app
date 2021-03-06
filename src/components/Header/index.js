import React, {useEffect, useState} from 'react';
import "./header.css"
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Header = ({setSearch}) => {
  const [user, setUser] = useState({})
  const params = useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${params.login}`)
      .then(({data}) => setUser(data))
  }, [params.login])

  return (
    <header>
      <nav className="d-flex justify-content-between p-3">
        <Link to={{pathname: user.html_url}} target="_blank" className="text-decoration-none text-white">
          <img src={user.avatar_url} width={80} className="avatar me-3" alt=""/>
          <span className="fs-4">  {user.login}</span> </Link>
        <div>
          <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search ..."
                 className="input main-input rounded-3 input-group-sm p-1"/>
          <Link to="/" className="text-decoration-none">
            <button className="btn text-white d-block">Home</button>
          </Link>
        </div>
      </nav>
    </header>
  )};

export default Header;