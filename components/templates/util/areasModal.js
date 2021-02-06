import style from '../../../styles/templates/util/areasModal.module.scss';
import React from 'react';
import { AREAS } from '../../../utils/areas';

export default class AreasModal extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.headerWrap}>
          <h2 className={style.title}>エリア絞り込み</h2>
          <button className={style.closeBtn}>
            <img src="/util/close.png" className={style.close} />
          </button>
        </div>
        <div className={style.bodyWrap}>
          {AREAS.map((area) => {
            return (
              <div className={style.areaWrap}>
                <h3 className={style.title}>{area.name}</h3>
                {area.objects.map((prefecture) => {
                  return (
                    <dl className={style.areaContainer}>
                      <dt className={style.prefectureWrap}>
                        <div className={style.elemWrap}>
                          <label htmlFor={prefecture.link}>{prefecture.name}</label>
                          <input id={prefecture.link} name="prefecture[]" type="checkbox" value={prefecture.name} />
                          <span className={style.check}></span>
                        </div>
                      </dt>
                      <dd className={style.areaDetailWrap}>
                        <div className={style.flex}>
                          {prefecture.objects.map((detailArea) => {
                            return (
                              <div className={style.areaDetail}>
                                <div className={style.elemWrap}>
                                  <label htmlFor={detailArea.link}>{detailArea.name}</label>
                                  <input id={detailArea.link} name="detailArea[]" type="checkbox" value={detailArea.name} />
                                  <span className={style.check}></span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </dd>
                    </dl>
                  )
                })}
              </div>
            )
          })}
        </div>
        <button className={style.submit}>このエリアで絞り込む</button>
      </div>
    )
  }
};