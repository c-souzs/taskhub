import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

const subMenuTagOptions = [
  {
    name: "Nome da tag",
    id: "1"
  },
  {
    name: "Tag nome",
    id: "2"
  },
  {
    name: "Da tag nome",
    id: "3"
  },
]

export default function SubMenu() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tagId = query.get("tagId");

  return (
    <S.SubMenu className='submenu'>
      {
        subMenuTagOptions.map((option) => {
          const firstLetter = option.name.charAt(0).toUpperCase();

          const active = tagId === option.id;

          return (
            <li key={`tag-${option.id}`}>
              <Link to={`?tagId=${option.id}`} className={active ? "active" : ""}>
                <p>{option.name}</p>
                <span>{firstLetter}</span>
              </Link>
            </li>
          )
        })
      }
    </S.SubMenu>
  )
}