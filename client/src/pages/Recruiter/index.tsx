import { ChangeEvent, ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import  * as C from "./styles";


//url: ${coder}

type Props = {
    name: string;
    email: string;
    github: string;
    level: number;
}


export const Recruiter = () => {
    const [coder, setCoder] = useState('')
    const [coderList, setCoderList] = useState([])

    const getCoder = async () => {
        const response = await fetch(`http://localhost:5000/api/v1/users/${coder}`)
        const data = await response.json()
        setCoderList(data)
        console.log(coderList)
    }

    const handleChange = (e :ChangeEvent<HTMLInputElement>) => {
        setCoder(e.target.value)
    }

    return (
        <div>
            <h1>Recruiter</h1>
            <hr/>
            <p>Escolha caso o candidato já seja Programador</p>
            <label htmlFor="programmer">Sim</label>
            <input onChange={handleChange} type='radio' name='programmer' value='1'/>
            <label htmlFor="programmer">Não</label>
            <input onChange={handleChange} type='radio' name='programmer' value='0'/>
            <button onClick={getCoder}>Buscar</button>
            <br />

            {/* {coderList} */}
            
            {/* <div>
                {coderList && coderList.map((user) => {
                    return (                    
                        <div>
                            <p>Nome: {user.name}</p>
                            <p>E-mail: {user.email}</p>
                            <p>Github: {user.github}</p>
                            <p>Nivel: {user.level === 0 ? 'Iniciante' : 'Programador'}</p>
                        </div>)

                   })} */}
            {/* </div> */}

        </div>
    );
}
