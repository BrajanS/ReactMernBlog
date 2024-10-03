import './App.css';
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>Acceuil</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}