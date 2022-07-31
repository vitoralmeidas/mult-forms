import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import  * as C from "./styles";
import axios from "axios";


export const Login = () => {
    const [recruiterPassword, setRecruiterPassword] = useState('')
    const [recruiterEmail, setRecruiterEmail] = useState('')

    const navigate = useNavigate();

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruiterPassword(e.target.value)
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setRecruiterEmail(e.target.value)
    }


    const submitHandler = async () => {
        
        // data
        const loginData = {
            email: recruiterEmail, password:recruiterPassword
        }

        const url = "http://localhost:5000/api/v1/auth/login"
        const response = await axios.post(url, loginData, {})
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

        // check if response is 200
        if(response.status === 200){
            // save token to local storage
            localStorage.setItem("token", response.data.token)
            // navigate("/recruiter")
        }
        
        window.location.href = "/recruiter"
        setRecruiterEmail('')
        setRecruiterPassword('')
    }

    return (
        <C.Container>
            <div>
                <div className="content"> 
                    <h1>RECRUTADOR</h1>
                    <form>
                        <input placeholder="Email" value={recruiterEmail} onChange={emailHandler} required />
                        <input placeholder="Password" value={recruiterPassword} onChange={passwordHandler} required />
                        <button onClick={submitHandler} >Login</button>
                    </form>
                    <Link to='/register'><button>Registrar</button></Link>
                    <Link to="/recruiter"><button>Recrutador</button></Link>
                </div>
        
            </div>            
        </C.Container>
    );
}
