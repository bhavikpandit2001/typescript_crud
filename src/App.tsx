import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carts from './components/Carts';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Products from './components/Products';
import Quotes from './components/Quotes';
import Todos from './components/Todos';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Carts/>}/>
        <Route path='/quotes' element={<Quotes/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/posts' element={<Posts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
