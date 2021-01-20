import style from '../../../styles/organisms/buttons/area.module.scss';

export default function Area({name, price, star, rating}) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{name}</h2>
      <div className={style.wrap}>
        <dl className={style.infoWrap}>
          <dt className={style.subtitle}>平均時給：</dt>
          <dd className={style.desc}><span className={style.info}>{price}</span> 円</dd>
        </dl>
        <dl className={style.infoWrap}>
          <dt className={style.subtitle}>平均評価：</dt>
          <dd className={style.desc}><span className={style.info}>{star}</span>（{rating}）</dd>
        </dl>
      </div>
    </div>
  )
}