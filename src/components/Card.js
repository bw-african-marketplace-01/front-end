import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
padding: 20px;
width: 60%;
margin: auto;
box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
0 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin-top: 20px;
margin-bottom: 20px;
display: flex;
.img {
  background-image: url("/images/African Marketplace.png");
  height: 200px;
  width: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-right: 50px;
}
`

function Card() {
  return (
    <>
      <StyledCard>
        <div className="img"></div>
        <div>
          <h2>Beans</h2>
          <p>2.00</p>
          <p>A burlap sack of 300 beans</p>
        </div>
      </StyledCard>
    </>
  )
}

export default Card;