// import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { BiPowerOff } from "react-icons/bi" 

export default function Logout() {
    const navigate = useNavigate();
    const handelClick = async () => {
        localStorage.clear();
        navigate("/login");
    }

  return (
    <Button onClick={handelClick}>
      <BiPowerOff />
    </Button>
  )
}


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { BiPowerOff } from 'react-icons/bi';

// export default function Logout() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <LogoutButton onClick={handleLogout}>
//       <BiPowerOff />
//     </LogoutButton>
//   );
// }

// const LogoutButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
//   background-color: #9a86f3;
//   border: none;
//   cursor: pointer;

//   svg {
//     font-size: 1.3rem;
//     color: #ebe7ff;
//   }
// `;
