
import './App.css';
import { BookProvider } from './context/BookContext';
import FooterStrip from './components/Footer/FooterStrip';
import Footer from './components/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/LoginComponent/Login';
import ProductDetails from './components/ProductDetails/ProductDetails'
import Header from './components/Header/Header';
import BookStore from './components/BookStore/BookStore';

function App() {
  const location = useLocation();
  return (
    <BookProvider>
          {location.pathname !== '/login' && <Header />}
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/store/:category" element={<BookStore />} />
          </Routes>
          {location.pathname !== '/login' && <FooterStrip />}
          {location.pathname !== '/login' && <Footer />}
        
       
    </BookProvider>
  );
}

export default App;
