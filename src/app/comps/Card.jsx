import card_css from "../Css/Card.module.css";
const Card = (props) => {
  let { vedio } = props;
  return (
    <div className={card_css.youTubrCard}>
      <div className={card_css.thumbnail}>
        <img src={vedio.thumbnailUrl} alt={vedio.title} />
      </div>
      <p className={card_css.title}>{vedio.title}</p>
      <div className={card_css.channel}>
        <p className={card_css.channelName}>{vedio.channelName}</p>
        <img src={vedio.channelLogoUrl} alt="" className={card_css.profile} />
      </div>
      <div className={card_css.reactions}>
        <span>Likes : {vedio.likes / 1000},k</span>
        <span>Views : {vedio.views / 1000},k</span>
      </div>
    </div>
  );
};

export default Card;
