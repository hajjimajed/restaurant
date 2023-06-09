import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
