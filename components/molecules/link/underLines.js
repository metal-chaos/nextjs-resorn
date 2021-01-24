import UnderLine from '../../atoms/link/underLine';
import style from '../../../styles/molecules/link/underLines.module.scss';

export default function UnderLines ({ objects }) {
  return (
    <ul className={style.wrap}>
      {objects.map((object) => {
        return (
          <li key={object.name} className={style.info}>
            <UnderLine
              link={object.link}
              linkText={object.name + "のリゾバ"}
            ></UnderLine>
          </li>
        )
      })}
    </ul>
  )
};