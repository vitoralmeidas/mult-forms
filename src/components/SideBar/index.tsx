import { Link } from "react-router-dom";

import * as C from "./styles";
import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as MainIcon } from "../../svgs/mail.svg";
import { ReactComponent as DataIcon } from "../../svgs/data.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SideBar = ({ title, description, icon, path, active }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon fill="white" height={24} width={24} />
          )}
          {icon === "book" && <BookIcon fill="white" height={24} width={24} />}
          {icon === "mail" && <MainIcon fill="white" height={24} width={24} />}
          {icon === "data" && <DataIcon fill="white" height={24} width={24} />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
