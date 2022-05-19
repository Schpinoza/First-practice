import styled from "styled-components";

const Div = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 50%;
  margin: auto;

`


function Card({children}) {
    return ( 
        <Div>{children}</Div>
     );
}

export default Card;