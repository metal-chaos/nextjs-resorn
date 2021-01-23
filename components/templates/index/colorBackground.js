import style from '../../../styles/templates/index/colorBackground.module.scss';

export default function ColorBackground({ children, color }) {
  return <div className={style.container + " " + color }>{children}</div>
}