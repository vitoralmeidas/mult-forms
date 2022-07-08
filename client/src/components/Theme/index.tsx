import { ReactNode } from "react";

import { useForm } from "../../contexts/FormContext";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import * as C from "./styles";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.SideBar>
            <SideBar
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SideBar
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SideBar
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />

            <SideBar
              title="Dados"
              description="Sobre voce"
              icon="data"
              path="/list"
              active={state.currentStep === 4}
            />
          </C.SideBar>

          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
