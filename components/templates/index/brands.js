import FourRecommendLogo from '../../organisms/containers/fourRecommendLogo';
import style from '../../../styles/templates/index/brands.module.scss';
import React from 'react';

export default class Features extends React.Component {
  render() {
    const first = '/brands/rizobacom.svg';
    const second = '/brands/rizobacom.svg';
    const third = '/brands/rizobacom.svg';
    const fourth = '/brands/rizobacom.svg';

    return (
      <div className={style.container}>
        <h2 className={style.title}>RESORNが掲載しているブランド</h2>
        <span className={style.desc}>RESORN（リゾーン）は各社のアフィリエイトプログラムに参加しています。</span>
        <FourRecommendLogo
          first={first}
          second={second}
          third={third}
          fourth={fourth}
          wrapStyle={style.wrap}
        ></FourRecommendLogo>
      </div>
    )
  }
};