import style from '../../../styles/templates/index/header.module.scss';

export default function Header(header) {
  return (
    <div className={style.wrap}>
      <img src="/logo.png" className={style.logo} /><h1 className={style.desc}>案件数No.1のリゾートバイト求人検索サイト</h1>
    </div>
  )
};

Header.defaultProps = {
  header: "header",
};