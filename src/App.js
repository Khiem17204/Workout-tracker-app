import { Route, Routes } from "react-router-dom"; 
import './App.css';
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<HomePage/>} />
        <Route exact path="/create-exercise" element={<CreateExercise/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
