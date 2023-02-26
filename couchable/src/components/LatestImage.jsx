import React, { useEffect, useContext } from 'react'
import { AppContext } from '../App';


function LatestImage() {
    const { latestCoach, setLatestCoach } = useContext(AppContext);
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/coaches/latest")
        .then(response => response.json())
        .then(data => {
            setLatestCoach(data.image_url);
        })
        .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [latestCoach]);
    
  return (
    <div>
      <img src={latestCoach} alt="latest fotinho" className="latest-image" />
    </div>
  );
}

export default LatestImage
