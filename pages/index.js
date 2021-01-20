import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/templates/index/header'
import OnBoading from '../components/templates/index/onboading'
import Background from '../components/templates/index/background'
import GrayBackground from '../components/templates/index/graybackground'
import Areas from '../components/templates/index/areas'
import Features from '../components/templates/index/features'

export default function Home() {
  return (
    <Background>
      <Layout>
        <Head>
          <title>RESORN（リゾーン）- 求人数No.1のリゾートバイト（住み込み）求人比較サイト</title>
        </Head>
        <Header></Header>
        <OnBoading></OnBoading>
      </Layout>
      <GrayBackground>
        <Areas></Areas>
        <Features></Features>
      </GrayBackground>
    </Background>
    )
}
