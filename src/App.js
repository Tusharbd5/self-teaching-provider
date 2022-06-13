import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home';
import ServiceDetails from './components/Pages/ServiceDetails/ServiceDetails';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Pages/login/Login/Login';
import SignUp from './components/Pages/login/SignUp/SignUp';
import RequireAuth from './components/Pages/login/RequireAuth/RequireAuth';
import Blog from './components/Pages/Blog/Blog';
import About from './components/Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId/:serviceName/:des' element={<RequireAuth>
          <ServiceDetails></ServiceDetails>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
