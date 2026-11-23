import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Layout from './components/common/Layout'
import Services from './pages/Services.tsx'
import Manufacturing from './pages/Manufacturing.tsx'
import Product from './pages/Product.tsx'
import ContactUs from './components/ContactUs/ContactUs.tsx'
import ScrollToTop from './components/common/ScrollToTop.tsx'
import Careers from './pages/Careers.tsx'

function App() {

  return (
    <Router>
      
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/manufacturing' element={<Manufacturing />} />
          <Route path='/product' element={<Product />} />
          {/* <Route path='/global' element={<Global />} /> */}
          <Route path='/careers' element={<Careers/>} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
      </Routes >
      <ScrollToTop /> 
    </Router >
  )
}

export default App
