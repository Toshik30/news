import './styled/style.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/routes/Blog';
import { Routes, Route } from 'react-router-dom'
import Contacts from './components/routes/Contacts';
import AboutUs from './components/routes/AboutUs';
import Products from './components/routes/Products';
import BlogDetailed from './components/routes/BlogDetailed';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/blog/' element={<Blog />}/>
          <Route path='*' element={<BlogDetailed />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/products' element={<Products />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
