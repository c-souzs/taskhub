import { useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import * as S from './style';
import { Notepad, SignOut, Tag } from "@phosphor-icons/react";
import SubMenu from "./SubMenu";

const menuOptions = [
  {
    name: "Minhas tasks",
    path: "/app/my-tasks",
    icon: Notepad,
    subMenu: <SubMenu />
  },
  {
    name: "Minhas tags",
    path: "/app/my-tags",
    icon: Tag,
  },
]

export default function Menu() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside>
      <S.MenuContainer>
        <div>
          <Logo />
          <nav>
            <S.MenuOptions>
              {
                menuOptions.map((option) => {
                  const Icon = option.icon;

                  const active = pathname.includes(option.path);

                  return (
                    <li className={active ? "active" : ""} key={`menu-item-${option.path}`}>
                      <S.LinkStyled to={option.path}>
                        {option.name}
                        <Icon size={18} color="#a855f7"/>
                      </S.LinkStyled>
                      { (active && option.subMenu) && option.subMenu }
                    </li>
                  )
                })
              }
            </S.MenuOptions>
          </nav>
        </div>
        <S.ButtonLogout>
          Sair
          <SignOut size={18} color="#a855f7"/>
        </S.ButtonLogout>
      </S.MenuContainer>
    </aside>
  )
}