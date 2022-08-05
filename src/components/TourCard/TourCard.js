const TourCard = ({ img, title, price, desc }) => {
  return (
    <div className='tour-card'>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className='tour-card__content'>
        <div>
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <p>{desc}</p>
        <button>Not Interested</button>
      </div>
    </div>
  );
};

export default TourCard;
