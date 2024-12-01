import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Products" element={<Products />}/>
        <Route path="/Wishlist" element={<h1>Wishlist Component</h1> } />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;