import style from '../../../styles/templates/util/footer.module.scss';
import Holizontally from '../../molecules/link/holizontallyWhite';
import React from 'react';
import { SITEMAP } from '../../../utils/sitemap';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Holizontally
          objects={SITEMAP}
        ></Holizontally>
        <div className={style.logoWrap}>
          <img src="/logo-white.png" className={style.logo} />
          <span className={style.desc}>リゾートバイト求人を可視化する。</span>
        </div>
        <div className={style.socialWrap}>
          <a href="https://twitter.com/resorn_net/" target="_blank" rel="noopener noreferrer">
            <img src="/util/twitter.png" className={style.icon} />
          </a>
        </div>
      </div>
    )
  }
};