import React, {useState, useEffect} from 'react';
import "./CreateExercise.css";
import {useNavigate, useParams} from "react-router-dom";

const EditExercise = () => {
    const [exercise, setExercise] = useState({
        title: '',
        details: ''
    });
    const navigate = useNavigate();
    const params = useParams();
    const exerciseId = params.id;
const handleChange = event =>{
    setExercise({
        ...exercise,
        [event.target.name] : event.target.value
    });
};

useEffect(()=>{
    fetch(`http://localhost:3111/exercises/${exerciseId}`)
        .then((response)=>{
            return response.json();
        }).then(data => {
            setExercise({
                title: data.title,
                details: data.details
            });
        }).catch(error => console.log(error));
},[exerciseId])

const handleExerciseUpdation =(event) => {
    event.preventDefault();
    fetch(`http://localhost:3111/exercises/${exerciseId}`,{
        method: 'PATCH',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(exercise)
    }).then(()=> {
        navigate('/home');
    }).catch((error)=>{
        console.log(error);
    })
}

  return (
    <form onSubmit={handleExerciseUpdation}>
        <label>Title</label>
        <input name='title' type="text" onChange={handleChange} value={exercise.title} required/>
        <label>Details</label>
        <textarea 
            name='details'
            cols='30'
            rows='10'
            value={exercise.details}
            onChange={handleChange}
            required
            ></textarea>
        <button>Update Exercise</button>
    </form>
  )
}

export default EditExercise;
