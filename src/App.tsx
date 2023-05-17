import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carts from './components/Carts';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import Posts from './components/Posts';
import Products from './components/Products';
import Quotes from './components/Quotes';
import Todos from './components/Todos';
import { ROUTES } from './constants/Routes';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={ROUTES.signIn} element={<Login/>}/>
        <Route path={ROUTES.default} element={<Home/>}/>
        <Route path={ROUTES.products} element={<Products/>}/>
        <Route path={ROUTES.carts} element={<Carts/>}/>
        <Route path={ROUTES.quotes} element={<Quotes/>}/>
        <Route path={ROUTES.todos} element={<Todos/>}/>
        <Route path={ROUTES.posts} element={<Posts/>}/>
        <Route path={ROUTES.orders} element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
