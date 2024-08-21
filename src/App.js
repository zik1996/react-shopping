import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './component/shopping.jsx/home';
import { Products } from './component/shopping.jsx/products';
import { Details } from './component/shopping.jsx/details';
import { Description } from './component/shopping.jsx/description';
import { Login } from './component/shopping.jsx/login';


function App() {
 return(
  <div className='container-fluid'>
    <header className='p-3 text-center bg-dark text-white'>
      <span className='h3'><span className='bi bi-cart3'></span> Shopping Site</span>
    </header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/:category' element={<Products />}>
          <Route path='details/:id' element={<Details />}>
            <Route path='description' element={<Description />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<><code>Path you requested : Not found</code></>}/>
      </Routes>
    </BrowserRouter>
  </div>
 )
}

export default App;
