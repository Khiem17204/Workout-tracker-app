import { Route, Routes } from "react-router-dom"; 
import './App.css';
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import Navbar from "./components/Navbar";
import EditExercise from "./pages/EditExercise";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<HomePage/>} />
        <Route exact path="/create-exercise" element={<CreateExercise/>}/>
        <Route exact path="/exercises/:id/edit" element={<EditExercise/>}/>
      </Routes>
    </div>
  );
}

export default App;
