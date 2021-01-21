import TitleIconDesc from '../../molecules/element/titleIconDesc';
import style from '../../../styles/organisms/element/threeTitleIconDesc.module.scss';

export default function ThreeTitleIconDesc ({left, center, right, wrapStyle}) {
  return (
    <div className={style.container + " " + wrapStyle}>
      <TitleIconDesc
        title={left.title}
        image={left.image}
        desc={left.desc}
      ></TitleIconDesc>
      <TitleIconDesc
        title={center.title}
        image={center.image}
        desc={center.desc}
      ></TitleIconDesc>
      <TitleIconDesc
        title={right.title}
        image={right.image}
        desc={right.desc}
      ></TitleIconDesc>
    </div>
  )
};