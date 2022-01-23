import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha os campos.");
    }
  };

  const setNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />
        <label>
          Seu nome completo.
          <input
            type="text"
            autoFocus
            onChange={setNameHandler}
            value={state.name}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
