import React, {useState, useEffect} from 'react';
import axios from "axios";

const MainPage = () => {
  const [users, setUsers] = useState([])
useEffect(()=> {
  axios("https://api.github.com/user")
    .then(({data})=> setUsers(data))



}, [])


  return (
    <div>




    </div>
  );
};

export default MainPage;