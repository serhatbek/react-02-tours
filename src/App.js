import './App.scss';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './components/Loading/Loading';
import Tours from './components/Tours/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  /**
   * ? @param {*} id
   * * Arraydeki id'leri eşleşmeyen itemlardan yeni bir array oluştur, id'si eşleşen item'ı sil
   */
  const deleteCard = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchToursData = async () => {
    setLoading(true);

    try {
      const res = await axios.get(url);
      const data = await res.data;
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToursData();
  }, []);

  if (tours.length === 0) {
    return (
      <main>
        <h1 className='tours__heading'>No Tours Left</h1>
        <button className='btn' onClick={fetchToursData}>
          Refresh
        </button>
      </main>
    );
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteCard={deleteCard} />
    </main>
  );
}

export default App;
