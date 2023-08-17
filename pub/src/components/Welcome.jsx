 
import React from 'react';
import styled from 'styled-components'; // Update import

import Robot from "../assets/robot.gif";
import Hello from "../assets/hello.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome,
        <span>{currentUser ? currentUser.username : "Guest"}
        <img className="robot" src={Hello} alt="Hello" /></span>  
      </h1>
      <h3>Please select a chat to Start Messaging.</h3>
    </Container>
  )
}
 


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
    .robot{
      height: 3rem;
    }
  }
`;