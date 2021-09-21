import React, {useEffect, useState} from 'react';
import "./header.css"
import axios from "axios";
import {useParams} from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({})
  const params = useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${params.login}`)
      .then(({data}) => setUser(data))
  })


  return (
    <header>
      <nav>

        <img src={user.avatar_url} width={60} className="avatar" alt=""/>
        <span>  {user.login}</span>


      </nav>
    </header>
  );
};

export default Header;