import RecommendLogo from '../../molecules/element/recommendLogo';
import style from '../../../styles/organisms/element/fourRecommendLogo.module.scss';

export default function FourRecommendLogo ({first, second, third, fourth, wrapStyle}) {
  return (
    <div className={style.container + " " + wrapStyle}>
      <RecommendLogo
        image={first}
        recommend={true}
      ></RecommendLogo>
      <RecommendLogo
        image={second}
        recommend={true}
      ></RecommendLogo>
      <RecommendLogo
        image={third}
        recommend={false}
      ></RecommendLogo>
      <RecommendLogo
        image={fourth}
        recommend={false}
      ></RecommendLogo>
    </div>
  )
};