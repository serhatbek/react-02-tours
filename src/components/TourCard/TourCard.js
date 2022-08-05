import { useState } from 'react';

const TourCard = ({ img, title, price, desc, delBtn }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(() => !readMore);
  };

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
        <p>
          {readMore ? desc : `${desc.substring(0, 200)}...`}
          <button onClick={toggleReadMore}>
            {!readMore ? 'Read More' : 'Show Less'}
          </button>
        </p>
        <button onClick={delBtn}>Not Interested</button>
      </div>
    </div>
  );
};

export default TourCard;
