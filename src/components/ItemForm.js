import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addData } from "../actions/dataActions";
import { useHistory } from "react-router-dom";

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

function ItemForm(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [item, setItem] = useState({
    business_id: 1,
    name: "",
    category: "",
    location: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newItem = {
      ...item,
      [name]: value,
    };
    setItem(newItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addData(item, token);
    history.push("/dashboard");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <H2>Add new Item</H2>
        <UserInput>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </UserInput>
        <UserInput>
          <input
            name="category"
            id="category"
            type="text"
            placeholder="Category"
            onChange={handleChange}
          />
        </UserInput>
        <UserInput>
          <input
            name="location"
            id="location"
            type="text"
            placeholder="Location"
            onChange={handleChange}
          />
        </UserInput>
        <UserInput>
          <input
            name="description"
            id="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
        </UserInput>
        <UserInput>
          <input
            name="price"
            id="price"
            type="number"
            placeholder="Price"
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

export default connect(null, { addData })(ItemForm);
