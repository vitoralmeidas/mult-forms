import { ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      navigate("/list");
    } else {
      alert("Preencha todos os campos.");
    }
  };

  const setGithubHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos? </h1>
        <p>Preencha os campos abaixo para conseguirmos entrar em contato.</p>

        <hr />
        <label>
          Qual o seu e-mail?
          <input type="email" onChange={setEmailHandler} value={state.email} />
        </label>

        <label>
          Qual o seu Github?
          <input type="url" onChange={setGithubHandler} value={state.github} />
        </label>

        <Link className="backButton" to={"/step2"}>
          Voltar
        </Link>
        <button onClick={handleNextStep}>Ver meus dados</button>
      </C.Container>
    </Theme>
  );
};
