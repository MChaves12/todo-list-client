import './App.css';
import { Routes, Route } from 'react-router-dom';

import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<div>Todo List</div>}></Route>
          <Route to='/task' element={<IsPrivate><TaskPage /></IsPrivate>} />
          <Route path='/signup' element={<IsAnon><SignupPage /></IsAnon>} />
          <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
        </Routes>
      </div>
  );
};

export default App
