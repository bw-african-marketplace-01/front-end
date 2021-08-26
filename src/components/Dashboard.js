import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getData } from "../actions/dataActions";
import Card from "./Card";

const Hero = styled.div`
  height: 500px;
  margin: auto;
  background-color: lightgrey;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80");
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    font-size: 48px;
  }
`;

const Title = styled.div`
background-color: lightgrey;
color: black;
font-weight: bold;
padding: 20px;
width: 60%;
margin: auto;
margin-top: 10px;
text-align: center;
`

function Dashboard(props) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    props.getData(token);
  }, []);

  return (
    <div>
      <Hero>
        <h1>Made for the small business</h1>
      </Hero>

      <Title>Local Products</Title>

      <Card />
      <Card />

      <div>
        {props.data.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

const connectStateToProps = (state) => {
  state = state.dataReducer;
  return {
    data: state.data,
  };
};

export default connect(connectStateToProps, { getData })(Dashboard);
