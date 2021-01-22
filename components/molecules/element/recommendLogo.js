import style from '../../../styles/molecules/element/recommendLogo.module.scss';

export default function RecommendLogo ({image, recommend}) {
  return (
    <div className={style.container}>
      <img src={image} className={style.image} />
      {recommend &&
        <div className={style.recommend}>おすすめ</div>
      }
    </div>
  )
};