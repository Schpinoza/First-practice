import Userinput from "./UserInput";
import Card from "../UI/Card";




function UserForm(props) {


    const handleSubmit = (event) =>{

       event.prevenDefault()
        console.log("CLICK");
    }
    return ( 
        <Card>
        <form type="submit" onSubmit={handleSubmit}>
            <Userinput/>
        </form>
        </Card>
     );
}

export default UserForm;