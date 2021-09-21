import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"


const UserItem = () => {
  const [users, setUsers] = useState([])
  const params=useParams()
  useEffect(()=> {
    axios(`https://api.github.com/users/${params.login}/repos`)
      .then(({data})=>setUsers(data) )

  },[params.login])

  return (
    <div>
      <table  border="1"  className="table  table-bordered table-striped my-3" cellPadding="15"  width="600px" height="50px" cellSpacing="0">
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
        users.map(item=>
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
    </div>
  );
};

export default UserItem;