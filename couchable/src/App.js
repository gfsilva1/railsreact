import './App.css';
import { createContext, useState } from 'react';
import FileForm from './components/FileForm';
import LatestImage from './components/LatestImage';

export const AppContext = createContext(null);



function App() {

  const [latestCoach, setLatestCoach] = useState(AppContext);

  return (
    <AppContext.Provider value={{ latestCoach, setLatestCoach}}>
      <div className="App">
        <FileForm />
        <LatestImage />
      </div>
    </AppContext.Provider>
  );
}

export default App;
