import style from '../../styles/templates/header.module.scss';

export default function Header(header) {
  return (
    <div className={style.wrap}>
      <img src="/logo.png" className={style.logo} /><span className={style.desc}>案件数No.1のリゾートバイト求人検索サイト</span>
    </div>
  )
};

Header.defaultProps = {
  header: "header",
};