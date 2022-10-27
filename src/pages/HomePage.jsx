import React, { useState, useEffect} from 'react';
import ExercisesList from '../components/ExercisesList';

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
            console.log(error);
        }
    }
    fetchExercises();
  }, []);

  const deleteExerciseHandler = (id) => {
    const patchedExercises = exercises.filter(exercise => exercise.id !== id);
    setExercises(patchedExercises);
  }

  return (
    <div>
      <ExercisesList onDeleteExercise={deleteExerciseHandler} exercises={exercises}/>
    </div>
  );
};

export default HomePage;