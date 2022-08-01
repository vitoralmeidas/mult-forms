import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import  * as C from "./styles";
import axios from "axios";


export const Login = () => {
    const [recruiterPassword, setRecruiterPassword] = useState('')
    const [recruiterEmail, setRecruiterEmail] = useState('')
    const [loadding, setLoadding] = useState(false)

    const navigate = useNavigate();

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruiterPassword(e.target.value)
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setRecruiterEmail(e.target.value)
    }

    // send token to local storage
    const loginHandler = async () => {

        const url = "http://localhost:5000/api/v1/auth/login";
        const response = await axios.post(url, {
            email: recruiterEmail,
            password: recruiterPassword
        })
        const token = response.data.token;

        ///////////////////////////////////////////////// MODAL ////////////////////////////////////////////////
        setTimeout(() => {
            // save token in local storage and set token in header authentication for all request
            localStorage.setItem("token", token);
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            setLoadding(true)}, 
        3000) 
    }


    return (
        <C.Container>
            {
                !loadding && 
                    <div>
                        <div className="content"> 
                            <h1>RECRUTADOR</h1>
                            <form>
                                <input placeholder="Email" value={recruiterEmail} onChange={emailHandler} required />
                                <input placeholder="Password" value={recruiterPassword} onChange={passwordHandler} required />
                            </form>
                            <button onClick={loginHandler} >Login</button>
                            <Link to='/register'><button>Registrar</button></Link>
                            <Link to="/recruiter"><button>Recrutador</button></Link>
                        </div>
                    </div> 
            }
            { loadding && <C.ModalLoadding>
                    <div className="content">
                        <h1>Carregando...</h1>
                    </div>
                </C.ModalLoadding>}

            { loadding  && <Navigate to="/recruiter" /> } 
           
        </C.Container>
    );
}
