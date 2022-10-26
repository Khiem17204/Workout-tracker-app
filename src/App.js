import { Route, Routes } from "react-router-dom"; 
import './App.css';
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<HomePage/>} />
          
      
      </Routes>
    </div>
  );
}

export default App;
