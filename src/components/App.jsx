// create your App component here
import { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogImage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  const handleClick = () => {
    fetchDogImage();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {dogImage && <img src={dogImage} alt="A Random Dog" />}
      <button onClick={handleClick}>New Dog</button>
    </div>
  );
}

export default App;