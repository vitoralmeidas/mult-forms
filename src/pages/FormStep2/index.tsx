import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { SelectedOption } from "../../components/SelectedOption";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    navigate("/step3");
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Selecione a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectedOption
          title="Sou iniciante."
          description="Comecei a programar há menos de 2 anos."
          icon="👶"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectedOption
          title="Sou programador."
          description="Já programo há 2 anos ou mais."
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link className="backButton" to={"/"}>
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
