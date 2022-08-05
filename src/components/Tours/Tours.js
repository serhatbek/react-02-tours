import TourCard from '../TourCard/TourCard';

const Tours = ({ tours, setTours }) => {
  const deleteCard = () => {
    // setTours()
    console.log('first');
  };

  return (
    <>
      <h1 className='tours__heading'>Our Tours</h1>
      {tours.map((tour) => {
        const { id, image, name, price, info } = tour;
        return (
          <TourCard
            key={id}
            img={image}
            title={name}
            price={price}
            desc={info}
            delBtn={deleteCard}
          />
        );
      })}
    </>
  );
};

export default Tours;
