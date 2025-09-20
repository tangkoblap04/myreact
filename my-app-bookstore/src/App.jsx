import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
// import BookListPage from './pages/BookListPage';
// import BookDetailPage from './pages/BookDetailPage';
// import CategoryPage from './pages/CategoryPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
  {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      
      
      <main className="main-content">
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          
         
          {/* <Route path="/books" element={<BookListPage />} /> */}
          
          {/* <Route path="/books/:bookId" element={<BookDetailPage />} />
          
          
          <Route path="/category/:categoryId" element={<CategoryPage />} />
       
          <Route path="/about" element={<AboutPage />} />
          
          
          <Route path="/contact" element={<ContactPage />} />
          
          */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      
      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
