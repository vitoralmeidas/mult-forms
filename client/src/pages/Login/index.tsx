import { Link } from "react-router-dom";
import  * as C from "./styles";

export const Login = () => {
    return (
        <div>
        <h1>LOGIN</h1>
        <Link to="/recruiter"><button>Recrutador</button></Link>
        </div>
    );
}
