import { useState } from "react";
import { Link } from "react-router-dom";
import  * as C from "./styles";
import axios from "axios";


export const Login = () => {
    const [recruiterPassword, setRecruiterPassword] = useState('')
    const [recruiterEmail, setRecruiterEmail] = useState('')

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruiterPassword(e.target.value)
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setRecruiterEmail(e.target.value)
    }

    const submitHandler = async () => {
        const loginData = {
            email: recruiterEmail, password:recruiterPassword
        }
        const url = "http://localhost:5000/api/v1/recruiter/login"
        const response = await axios.post(url, loginData)
        console.log(response)

        setRecruiterEmail('')
        setRecruiterPassword('')
    }

    return (
        <C.Container>
            <div>
                <div className="content">
                    <h1>RECRUTADOR</h1>
                    <form>
                        <input placeholder="Email" value={recruiterPassword} onChange={passwordHandler} required />
                        <input placeholder="Password" value={recruiterEmail} onChange={emailHandler} required />
                        <button onClick={submitHandler} >Login</button>
                    </form>
                    <Link to='/register'><button>Registrar</button></Link>
                    <Link to="/recruiter"><button>Recrutador</button></Link>
                </div>
        
            </div>            
        </C.Container>
    );
}
