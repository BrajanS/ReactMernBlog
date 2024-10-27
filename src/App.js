import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// NavBar
import Navigation from './components/Navigation.jsx';
// Routes
import Home from './pages/Home.jsx';
import Page404 from './pages/Page404.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import GestionArticle from './components/GestionArticle.jsx';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}>Acceuil</Route>
          <Route path='*' element={<Page404/>}>Page 404</Route>
          <Route path='/login' element={<Login/>}>Login</Route>
          <Route path='/register' element={<Register/>}>Register</Route>
          <Route path='/gestion' element={<GestionArticle/>}>Gestion articles</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}