import './App.css';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import Page404 from './pages/Page404.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}>Acceuil</Route>
          <Route path='*' element={<Page404/>}>Page 404</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}