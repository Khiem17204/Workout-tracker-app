import React from 'react'
import './ExerciseItem.css';

function ExerciseItem(props) {
  return (
    <div className='exercise'>
        <div className='actions'>
            <h4>{props.exercise.title}</h4>
            <div className='button'>

            </div>
        </div>
        <div className='details'>
            <p>{props.exercise.details}</p>
        </div>
    </div>
  )
}
export default ExerciseItem;