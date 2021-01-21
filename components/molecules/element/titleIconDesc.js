import style from '../../../styles/molecules/element/titleIconDesc.module.scss';

export default function TitleIconDesc ({title, image, desc}) {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <h3 className={style.title}>{title}</h3>
        <img src={image} className={style.image} />
        <div className={style.desc}>{desc}</div>
      </div>
    </div>
  )
};