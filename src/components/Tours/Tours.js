import TourCard from '../TourCard/TourCard';

const Tours = ({ tours, deleteCard }) => {
  return (
    <>
      <h1 className='tours__heading'>Our Tours</h1>
      {tours.map((tour) => {
        const { id, image, name, price, info } = tour;
        return (
          <TourCard
            key={id}
            id={id}
            img={image}
            title={name}
            price={price}
            desc={info}
            deleteCard={deleteCard}
          />
        );
      })}
    </>
  );
};

export default Tours;
