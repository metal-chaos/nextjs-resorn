import style from '../../../styles/templates/index/onboading.module.scss';
import SearchBox from '../../organisms/buttons/searchbox';
import InputLarge from '../../molecules/input/large';
import React from 'react';

export default class Onboading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({iputValue: event.target.inputValue});
  }

  render() {
    return (
      <div className={style.wrap}>
        <div className={style.caption}>
          <h2 className={style.title}>あれ、リゾートバイト求人が見える。</h2>
          <span className={style.desc}>全てのリゾートバイトを可視化する。</span>
          <ul className={style.info_wrap}>
            <li className={style.info}>
              <dl>
                <dt>掲載件数</dt>
                <dd>2件</dd>
              </dl>
            </li>
            <li className={style.info}>
              <dl>
                <dt>平均時給</dt>
                <dd>2円</dd>
              </dl>
            </li>
            <li className={style.info}>
              <dl>
                <dt>最高時給</dt>
                <dd>2円</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div className={style.search}>
          <h2 className={style.title}>さぁ、検索してみましょう！</h2>
          <SearchBox></SearchBox>
          <InputLarge
            placeholder='エリア名・職種・福利厚生'
            onChange={this.handleChange}
          ></InputLarge>
        </div>
      </div>
    )
  };
}