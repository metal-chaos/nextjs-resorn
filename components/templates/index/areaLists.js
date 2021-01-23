import UnderLine from '../../atoms/link/underLine';
import style from '../../../styles/templates/index/areaLists.module.scss';
import React from 'react';
import { AREAS } from '../../../utils/areas';

export default class AreaLists extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>都道府県から検索する</h2>
        {AREAS.map((area) => {
          return (
            <dl className={style.areaWrap}>
              <dt className={style.title}>
                <a href={area.link} className={style.link}>{area.area}</a>
              </dt>
              <dd className={style.wrap}>
                <ul className={style.infoWrap}>
                  {area.prefectures.map((prefecture) => {
                    return (
                      <li className={style.info}>
                        <UnderLine
                          link={prefecture.link}
                          linkText={prefecture.name + "のリゾバ"}
                        ></UnderLine>
                      </li>
                    )
                  })}
                </ul>
              </dd>
            </dl>
          )
        })}
      </div>
    )
  }
};