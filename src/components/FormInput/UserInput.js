import styled from "styled-components"
import AddButton from "../UI/AddButton";
const Div = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`
const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
   

  &:focus{
    outline: none;
    border-color: #4f005f;
  }
`



function Userinput(props) {
    return ( 
        <div>
            <Div>
                <Label>Username</Label>
                <Input type="text" />
                <Label>Age (Years)</Label>
                <Input type="number" />
                <AddButton type="submit" />
            </Div>
        </div>
     );
}

export default Userinput;