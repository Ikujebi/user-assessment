import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import SideBar from './Components/Sidebar'
import Table from './Components/Tables'

import './index.css'


// const baseApiUrl = 'http://localhost:6000/api/v1/'

const App = () => {
  const [pageTitle] = useState("ZEDDIES STORE USERS");
  
  const [users, setUsers] = useState([
    {
      "address": {
          "geolocation": {
              "lat": "-37.3159",
              "long": "81.1496"
          },
          "city": "kilcoole",
          "street": "new road",
          "number": 7682,
          "zipcode": "12926-3874"
      },
      "id": 1,
      "email": "john@gmail.com",
      "username": "johnd",
      "password": "m38rmF$",
      "name": {
          "firstname": "john",
          "lastname": "doe"
      },
      "phone": "1-570-236-7033",
      "__v": 0
  }
    
  ])

  /*const getUsers = async() => {
   
    try{
      const response = await fetch('http://localhost:6000/api/v1/getAllUsers')
      const data = await response.json();
      
      setUsers(data)
    }catch (error){
      
      console.log(error);
    }
  }*/

  const getUsers = () => {
    fetch("http://localhost:6000/api/v1/getAllUsers")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className=' h-[100svh] bg-fuchsia-50 overflow-auto'>
      <Header pageTitle={pageTitle}/>
      <section className=' h-full grid grid-cols-1 md:grid-cols-[15rem_1fr] '>
        <SideBar/>
        <Table users={users} />
      </section>
    </div>
  )
}

export default App