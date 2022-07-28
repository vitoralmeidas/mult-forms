import { useState } from "react";
import { Link } from "react-router-dom";
import  * as C from "./styles";


export const Login = () => {
    const [recruiterPassword, setRecruiterPassword] = useState('')
    const [recruiterEmail, setRecruiterEmail] = useState('')

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruiterPassword(e.target.value)
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setRecruiterEmail(e.target.value)
    }


    return (
        <C.Container>
            <div>
                <div className="content">
                    <h1>RECRUTADOR</h1>
                    <form>
                        <input placeholder="Email" value={recruiterPassword} onChange={passwordHandler}  />
                        <input placeholder="Password" value={recruiterEmail} onChange={emailHandler} />
                        <button>Login</button>
                    </form>
                    <button>Register</button>
                    <Link to="/recruiter"><button>Recrutador</button></Link>
                </div>
        
            </div>            
        </C.Container>
    );
}
