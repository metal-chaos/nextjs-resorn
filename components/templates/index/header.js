import style from '../../../styles/templates/index/header.module.scss';

export default function Header(header) {
  return (
    <div className={style.wrap}>
      <img src="/logo.png" className={style.logo} /><h1 className={style.desc}>リゾートバイト（住み込み）求人を可視化する。</h1>
    </div>
  )
};

Header.defaultProps = {
  header: "header",
};