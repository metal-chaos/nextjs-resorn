import UnderLines from '../../molecules/link/underLines';
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
            <dl key={area.name} className={style.areaWrap}>
              <dt className={style.title}>
                <a href={area.link} className={style.link}>{area.name}</a>
              </dt>
              <dd className={style.wrap}>
                <UnderLines
                  objects={area.objects}
                ></UnderLines>
              </dd>
            </dl>
          )
        })}
      </div>
    )
  }
};