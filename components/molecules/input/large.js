import Input from '../../atoms/input/large';
import style from '../../../styles/molecules/input/large.module.scss';

export default function Large ({placeholder}) {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <Input
          placeholder={placeholder}
        ></Input>
        <button type="submit" className={style.button}>検索</button>
      </div>
    </div>
  )
};