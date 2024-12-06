import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Add from './components/Add';
import ViewProducts from './components/ViewProducts';
import Update from './components/Update';
import Home from './components/Home';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ViewProducts />}/>
        <Route path="/Add" element={<Add />} />
        <Route path="/Update/:id" element={<Update />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;