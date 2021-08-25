import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { useHistory } from 'react-router-dom'

const FormContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;
const H2 = styled.h2`
  margin-bottom: 3%;
  font-size: 2rem;
  text-align: center;
`;
const UserInput = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  input {
    background: #4f6c6b;
    border: 2px solid #f7ddd9;
    height: 3rem;
    width: 20rem;
    border-radius: 0.5rem;
    color: #ededed;
  }
  ::placeholder {
    color: #ededed;
    font-size: 1rem;
  }
`;
const SubmitButtonDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  button {
    background: #4f6c6b;
    color: #ededed;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border: 2px solid #f7ddd9;
    border-radius: 0.6rem;
    height: 3rem;
    width: 8rem;
  }
`;

function Signin(props) {

  const history = useHistory();
  
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let userAccount = {
      ...credentials,
      [name]: value,
    };
    setCredentials(userAccount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(credentials);
    localStorage.setItem('token', props.token)
    history.push('/dashboard')
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <H2>User Login</H2>
        <UserInput>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
        </UserInput>
        <UserInput>
          <input
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
          />
        </UserInput>
        <SubmitButtonDiv>
          <button>Submit</button>
        </SubmitButtonDiv>
      </form>
    </FormContainer>
  );
}

const connectStateToProps = (state) => {
  state = state.authReducer
  return {
    token: state.token,
    error: state.error
  }
}

export default connect(connectStateToProps, { login })(Signin);
