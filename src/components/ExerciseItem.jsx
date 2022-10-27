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

  const performExerciseToggle = () => {
    fetch(`http://localhost:3111/exercises/${props.exercise.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({complete : !props.exercise.complete})
    }).then(()=> {
      props.onToggleExercise(props.exercise.id);
      
    }).catch(error => console.log(error));
  }

  const classes = ['exercise'];
  if (props.exercise.complete){
    classes.push('complete');
  }
  return (

    <div className = {classes.join(' ')}>
        <div className='actions'>
            <h4>{props.exercise.title}</h4>
            <div className='button'>
              <button onClick={performExerciseDeletion}>Delete</button>
              <button onClick={performExerciseToggle}>Toggle</button>
            </div>
        </div>
      <div className='details'>
            <p>{props.exercise.details}</p>
      </div>
    </div>
  )
}
export default ExerciseItem;