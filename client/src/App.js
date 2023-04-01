import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/headers/Headers';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Edit from './pages/edit/Edit';
import Profile from './pages/profile/Profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={ <Home/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/edit/:id' element={ <Edit/> } />
        <Route path='/userprofile/:id' element={ <Profile/> } />
      </Routes>
    </div>
  );
}

export default App;
