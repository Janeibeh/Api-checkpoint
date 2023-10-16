import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState ([]);
  const [error, setError] = useState();
  
  useEffect ( () => {
  axios.get("https://jsonplaceholder.typicode.com/users")
      .then (response => {
        setUsers(response.data)
      })
      .catch(error => { setError(error.message) })
  }, [])

  return (
    <>
        <h1><strong> List of All Users</strong> </h1>
        {error && <p>{error}</p>}
        <ul>
            {users.map(user => ( <li key={user.id}>{user.name}  {user.phone}  {user.email} </li>))}
        </ul>

    </>
  )
}

export default UserList
