import Anchor from '../../atoms/link/anchor';
import style from '../../../styles/molecules/link/holizontallyWhite.module.scss';

export default function Holizontally ({ objects }) {
  return (
    <ul className={style.wrap}>
      {objects.map((object) => {
        return (
          <li key={object.name} className={style.list}>
            <Anchor
              link={object.link}
              linkText={object.name}
              style={style.anchor}
            ></Anchor>
          </li>
        )
      })}
    </ul>
  )
};