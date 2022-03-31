import './About.css';
import './styles/Home/Top.css';
import './styles/Home/Banner.css';
import './styles/Home/FixedBanner.css';
import './styles/Home/ProductList.css';
import './styles/Home/StyleSlide.css';
import './styles/Home/BrandSlide.css';
import './styles/Home/Bottom.css';
import './styles/Shop/TopFilter.css';
import './styles/Shop/Trend.css';
import './styles/Shop/ShopBanner.css';
import './styles/Shop/Content.css';
import './styles/Shop/Filter.css';
import './styles/Shop/List.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
          </Routes>
      </div>
  );
}

export default App;
