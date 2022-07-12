import * as C from "./styles";
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <C.Container>
      <div>
      <h1>Cadastro de Desenvolvedor</h1>
      <p>Faça seu cadastro na lista e receba um emprego instantaneamente.</p>
      </div>
      <Link to="/recruiter"><button>Recrutador</button></Link> 
    </C.Container>
  );
};
