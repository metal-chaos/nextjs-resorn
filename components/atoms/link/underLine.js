import style from '../../../styles/atoms/link/underLine.module.scss';
import Link from 'next/link'

export default function UnderLine ({ link, linkText }) {
  return (
    <Link href={link} >
      <a className={style.anchor}>{linkText}</a>
    </Link>
  )
};