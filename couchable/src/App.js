import './App.css';
import axios from "axios";
import Coaches from './components/coaches';
import { createContext, useEffect, useState } from 'react';
import FileForm from './components/FileForm';
import LatestImage from './components/LatestImage';

export const AppContext = createContext(null);

const API_URL = "http://localhost:3000/api/v1/coaches";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [coaches, setCoaches] = useState([]);
  const [latestCoach, setLatestCoach] = useState(AppContext);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setCoaches(items);
      }
    });
  return () => (mounted = false);
}, []);

  return (
      <div className="App">
        <Coaches coaches = {coaches} />
      </div>
  );
}

export default App;
