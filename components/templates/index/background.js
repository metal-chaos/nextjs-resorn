import style from '../../../styles/templates/index/background.module.scss';

export default function Background({ children }) {
  return <div className={style.container}>{children}</div>
}