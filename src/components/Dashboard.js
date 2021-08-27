import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getData, addData } from "../actions/dataActions";
import { Link } from 'react-router-dom'
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
  position:relative;

  a{
    position:absolute;
    right:0;
    margin-right:20px;
    background-color:transparent;
    border:0;
    text-decoration: underline;
    color:black;
  }
`;

function Dashboard(props) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    props.getData(token);
  }, []);

  if (!props.data) return (<h1>Loading...</h1>)

  const data = props.data.map(
    (item, idx) => props.data[props.data.length - 1 - idx]
  );

  return (
    <div>
      <Hero>
        <h1>Made for the small business</h1>
      </Hero>

      <Title>
        Local Products 
        <Link to="/item-form">
            Add Item
        </Link>
      </Title>

      <div>
        {data.map((item) => (
          <div>
            <Card
              name={item.name}
              price={item.price}
              description={item.description}
            />
          </div>
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

export default connect(connectStateToProps, { getData, addData })(Dashboard);
