import Link from 'next/link'

export default function Anchor ({ link, linkText, style }) {
  return (
    <Link href={link} >
      <a className={style}>{linkText}</a>
    </Link>
  )
};