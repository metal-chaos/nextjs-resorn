import style from '../../../styles/templates/index/areas.module.scss';
import Area from '../../organisms/buttons/area'

export default function Areas({ }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>日本全国のエリアから検索する</h2>
      <span>47都道府県、全国の地域から探してみましょう。</span>
      <div className={style.area_wrap}>
        <Area
          name='北海道'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='東北'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='関東'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='北陸'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='中部'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='関西・近畿'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='中国'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='四国'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
        <Area
          name='九州'
          price='1,200'
          star='★★★★☆'
          rating='3.5'
        ></Area>
      </div>
    </div>
  )
};