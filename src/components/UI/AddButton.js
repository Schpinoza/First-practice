import React from "react";
import styled from "styled-components"
const Button = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
  background: #741188;
  border-color: #741188;
 }

  &:focus {
  outline: none;
 }
`
function AddButton({type}) {

    const handleClick = e => console.log("clicked");
    return ( 
        <Button type={type} on onClick={handleClick}>Add User</Button>
     );
}

export default AddButton;