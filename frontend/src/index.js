import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from "./landing_page/login/Login"; 
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/home/Navbar';
import NotFound from './landing_page/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import ByteVestAccountFAQs from './landing_page/home/ByteVestAccountFAQs';
import StockMarketEducationPage from './landing_page/home/StockMarketEducationPage';
import StockMarket from './landing_page/market/StockMarket';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path='/about' element={<AboutPage />}></Route>
    <Route path='/product' element={<ProductsPage />}></Route>
    <Route path='/pricing' element={<PricingPage />}></Route>
    <Route path='/faqs' element={<ByteVestAccountFAQs />}></Route>
     <Route path='/market' element={ <StockMarket />}></Route>
    <Route path='/varsity' element={<StockMarketEducationPage />}></Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);


