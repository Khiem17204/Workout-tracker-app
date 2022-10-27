import React from 'react'
import './ExerciseItem.css';

function ExerciseItem(props) {
  const performExerciseDeletion = () => {
    fetch(`http://localhost:3111/exercises/${props.exercise.id}`,{
      method: 'DELETE',
    })
      .then(()=> {
        props.onDeleteExercise(props.exercise.id);
      })
        .catch((error)=> console.log(error));
  };
  return (
    <div className='exercise'>
        <div className='actions'>
            <h4>{props.exercise.title}</h4>
            <div className='button'>
              <button onClick={performExerciseDeletion}>Delete</button>
            </div>
        </div>
      <div className='details'>
            <p>{props.exercise.details}</p>
      </div>
    </div>
  )
}
export default ExerciseItem;