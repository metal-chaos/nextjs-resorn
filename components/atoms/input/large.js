import style from '../../../styles/atoms/input/large.module.scss';

export default function Large ({ placeholder }) {
  return (
    <input className={style.input} type="text" placeholder={placeholder}></input>
  )
};