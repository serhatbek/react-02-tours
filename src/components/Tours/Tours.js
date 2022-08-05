import TourCard from '../TourCard/TourCard';

const Tours = ({ tours }) => {
  return (
    <>
      {tours.map((tour) => {
        const { id, image, name, price, info } = tour;
        return (
          <TourCard
            key={id}
            img={image}
            title={name}
            price={price}
            desc={info}
          />
        );
      })}
    </>
  );
};

export default Tours;
