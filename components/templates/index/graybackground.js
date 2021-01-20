import style from '../../../styles/templates/index/graybackground.module.scss';

export default function GrayBackground({ children }) {
  return <div className={style.container}>{children}</div>
}