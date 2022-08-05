import './App.scss';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './components/Loading/Loading';
import Tours from './components/Tours/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

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

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
