import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";

export const FinalStep = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  console.log(state)

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  const handleNextStep = async () => {
    const {name, email, github, level} = state;
    await axios.post("http://localhost:5000", {name, email, github, level});
    dispatch({
      type: FormActions.cleanAll,
      payload: "",
    });
    navigate("/");
  };

  const levelCode = state.level === 0 ? "Iniciante" : "Programador";

  return (
    <Theme>
      <C.Container>
        <div className="dados">
          <h2>Nome:</h2>
          <p>{state.name}</p>
        </div>

        <hr />

        <div className="dados">
          <h2>E-mail:</h2>
          <p>{state.email}</p>
        </div>

        <hr />

        <div className="dados">
          <h2>Github:</h2>
          <p>{state.github}</p>
        </div>
        <hr />

        <div className="dados">
          <h2>Nivel:</h2>
          <p>{levelCode}</p>
        </div>

        <Link className="backButton" to={"/step3"}>
          Voltar
        </Link>

        <button onClick={handleNextStep}>Obrigado</button>
      </C.Container>
    </Theme>
  );
};
