import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/templates/index/header'
import OnBoading from '../components/templates/index/onboading'
import Background from '../components/templates/index/background'
import ColorBackground from '../components/templates/index/colorBackground'
import Areas from '../components/templates/index/areas'
import Features from '../components/templates/index/features'
import Brands from '../components/templates/index/brands'
import AreaLists from '../components/templates/index/areaLists'
import Jobs from '../components/templates/index/jobs'
import Footer from '../components/templates/util/footer'
import AreasModal from '../components/templates/util/areasModal'
import style from '../styles/pages/index.module.scss';

export default function Home() {
  return (
    <Background>
      <Layout>
        <Head>
          <title>RESORN（リゾーン）- リゾートバイト（住み込み）を可視化する求人比較サイト</title>
        </Head>
        <AreasModal></AreasModal>
        <Header></Header>
        <OnBoading></OnBoading>
      </Layout>
      <ColorBackground
        color={style.gray}
      >
        <Areas></Areas>
        <Features></Features>
      </ColorBackground>
      <Layout>
        <Brands></Brands>
      </Layout>
      <ColorBackground
        color={style.gray}
      >
        <AreaLists></AreaLists>
        <Jobs></Jobs>
      </ColorBackground>
      <ColorBackground
        color={style.secondary}
      >
        <Footer></Footer>
      </ColorBackground>
    </Background>
    )
}
