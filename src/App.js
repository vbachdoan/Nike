import './App.css';
import Home from './pages/homePage/home';
import { Routes, Route } from 'react-router-dom';
import MainNavigation from './components/mainNavigation';
import Footer from './components/footer';
import Help from './pages/help/help';
import Register from './pages/register/register';

function App() {
  return (
    <>
      <div id="document">
        <MainNavigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes> 
        <Footer/>
      </div>
    </>
  );
}

export default App;
