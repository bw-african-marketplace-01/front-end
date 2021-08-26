import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

function Header() {
  const LogOut = styled.div`
    color: ${(props) => props.theme.white};
    border-radius: 20rem;
    text-decoration: none;
    padding: 0 10px;
    color: white;
  `;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 4vw;
    background-color: #262626;
    color: white;
    margin-bottom: 5px;
    h1 {
      margin: 0;
      font-size: 1.4rem;
      padding: 1vh 0;
    }
  `;

  const LoggedLink = styled.div`
    text-decoration: none;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 20rem;
  `;

  const Links = styled.div`
    display: flex;
    a {
      text-decoration: none;
      padding: 0 10px;
      color: white;
    }
  `;

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Header>
      <h1>African Marketplace</h1>
      {localStorage.getItem("token") ? (
        <Link onClick={logout} to="/home">
          <LogOut>Log Out</LogOut>
        </Link>
      ) : (
        <Links>
          <Link to="/login">
            <LoggedLink>Log in</LoggedLink>
          </Link>
          <Link to="/signup">
            <LoggedLink>Create Account</LoggedLink>
          </Link>
        </Links>
      )}
    </Header>
  );
}

export default withRouter(Header);
