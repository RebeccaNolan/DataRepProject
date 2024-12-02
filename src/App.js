import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Add from './components/Add';
import Wishlist from './components/Wishlist';
import ViewProducts from './components/ViewProducts';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Products" element={<ViewProducts />}/>
        <Route path="/Wishlist" element={<h1>test </h1>} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Update/:id" element={<Update />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;