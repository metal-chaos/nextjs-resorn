import ThreeTitleIconDesc from '../../organisms/containers/threeTitleIconDesc';
import style from '../../../styles/templates/index/features.module.scss';
import React from 'react';

export default class Features extends React.Component {
  render() {
    const left = {
      title: 'Larger',
      image: '/index/database.png',
      desc: '独自のクローラーで取得した各ブランドの求人情報を掲載。住み込みのリゾートバイトから工場求人まで。',
    };

    const center = {
      title: 'Sort by Period',
      image: '/index/calendar.png',
      desc: '期間で仕事を検索。半年以上の長期から1ヶ月の短期案件まで自由に探せるプラットフォームを目指しています。',
    };

    const right = {
      title: 'Rating',
      image: '/index/rating.png',
      desc: '仕事選びに迷ってしまう？大丈夫。時給、福利厚生から「RESORNスコア」を算出し、求人を独自に評価しています。',
    };

    return (
      <div className={style.container}>
        <h2 className={style.title}>RESORN（リゾーン）の3つの特徴</h2>
        <span>最大限に活用。最高の住み込みバイト求人を見つけてみよう。</span>
        <ThreeTitleIconDesc
          left={left}
          center={center}
          right={right}
          wrapStyle={style.wrap}
        ></ThreeTitleIconDesc>
      </div>
    )
  }
};