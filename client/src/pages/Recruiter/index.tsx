import { useState } from "react";
import  * as C from "./styles";

export const Recruiter = () => {
    const [coder, setCoder]=useState('')
    console.log(coder)
    return (
        <div>
        <h1>Recruiter</h1>
        <hr/>
        <p>Escolha caso o candidato já seja Programador</p>
        <label htmlFor="programmer">Sim</label>
        <input onChange={(e) => setCoder(e.target.value)} type='radio' name='programmer' value='1'/>
        <label htmlFor="programmer">Não</label>
        <input onChange={(e) => setCoder(e.target.value)} type='radio' name='programmer' value='0'/>
        </div>
    );
}
