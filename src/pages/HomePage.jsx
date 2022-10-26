import React, { useState, useEffect} from 'react';

const HomePage = () => {
  const [ exercises, setExercises ] = useState([]);
  useEffect(() => {
    async function fetchExercises(){
        try {
            const response = await fetch('http://localhost:3111/exercises');
            const fetchedExercises = await response.json();
            console.log('here are the exercise..',fetchedExercises);
            setExercises(fetchedExercises);
        } catch (error) {
            
        }
    }
    fetchExercises();
  }, [])
  return (
    <div>HomePage</div>
  );
};

export default HomePage;