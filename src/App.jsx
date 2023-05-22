import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<div>Todo List</div>}></Route>
        </Routes>
      </div>
  );
};

export default App
