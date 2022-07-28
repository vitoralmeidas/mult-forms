import React, { useState } from "react";
import { Link } from "react-router-dom";
import  * as C from "./styles";
import axios from "axios";


export const Register = () => {
    const [recruiterPassword, setRecruiterPassword] = useState('')
    const [recruiterEmail, setRecruiterEmail] = useState('')
    const [recruiterName, setRecruiterName] = useState('')
    const [recruiterCompany, setRecruiterCompany] = useState('')

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruiterPassword(e.target.value)
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setRecruiterEmail(e.target.value)
    }

    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruiterName(e.target.value)
    }

    const companyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruiterCompany(e.target.value)
    }

    const submitHandler = async () => {
        const loginData = {
            email: recruiterEmail, 
            password:recruiterPassword, 
            name: recruiterName, 
            company: recruiterCompany
        }

        const url = "http://localhost:5000/api/v1/recruiter/register"

        const response = await axios.post(url, loginData)
        
        setRecruiterEmail('')
        setRecruiterPassword('')
        setRecruiterName('')
        setRecruiterCompany('')
        
        console.log(response)
    }

    return (
        <C.Container>
            <div>
                <div className="content">
                    <h1>RECRUTADOR</h1>
                    <form>
                        <input placeholder="Email" value={recruiterPassword} onChange={passwordHandler} required />
                        <input placeholder="Password" value={recruiterEmail} onChange={emailHandler} required />
                        <input placeholder="Nome" value={recruiterName} onChange={nameHandler} required />
                        <input placeholder="Company" value={recruiterCompany} onChange={companyHandler} required />
                        <Link to='/login'><button>Login</button></Link>
                    </form>
                    <button type="submit" onClick={submitHandler} >Register</button>
                    <Link to="/recruiter"><button>Recrutador</button></Link>
                </div>
        
            </div>            
        </C.Container>
    );
}
