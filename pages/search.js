import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>リゾートバイト（住み込み）求人一覧 - RESORN（リゾーン）</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}