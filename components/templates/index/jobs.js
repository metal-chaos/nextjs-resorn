import style from '../../../styles/templates/index/jobs.module.scss';
import UnderLines from '../../molecules/link/underLines';
import React from 'react';
import { JOBS } from '../../../utils/jobs';

export default class Jobs extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>業種から検索する</h2>
        <UnderLines
          objects={JOBS}
        ></UnderLines>
      </div>
    )
  }
};