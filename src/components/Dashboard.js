import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Hero = styled.div`
height: 500px;
margin: auto;
background-color: lightgrey;
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80");
background-position: center;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;
h1 {
  color: white;
  font-size: 48px;
}
`

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/items')
      .then(res => {
        // setData()
        console.log(res)
      })
  }, [])

  return (
    <div>
      <Hero>
        <h1>Made for the small business</h1>
      </Hero>
    </div>
  )
}