import style from '../../../styles/organisms/buttons/searchbox.module.scss';

export default function SearchBox() {
  return (
    <div className={style.container}>
      <button className={style.button}>キーワードから探す</button>
      <button className={style.button}>エリア名から探す</button>
      <button className={style.button}>オプションから探す</button>
    </div>
  )
}