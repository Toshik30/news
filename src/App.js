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

import { createContext, useState } from 'react';
import { PrivacyPolicy } from './components/Modal/PrivacyPolicy';
import { Terms } from './components/Modal/Terms';



export  const ThemeContext = createContext('')
function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('className')) || false)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={theme ? 'dark' : ''} >
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/blog/' element={<Blog />}/>
          <Route path='*' element={<BlogDetailed />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/policy'  element={<PrivacyPolicy/>} />
          <Route path='/terms'  element={<Terms/>} />
        </Routes>
      <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
