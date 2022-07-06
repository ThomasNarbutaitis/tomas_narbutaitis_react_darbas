import css from './Cards.module.css';

const SingleCard = ({ title, description }) => {
  return (
    <div className={css.cards}>
      <div>
        <h3 className={css.title}>{title}</h3>
        <p className={css.descr}>{description}</p>
      </div>
    </div>
  );
};

export default SingleCard;
