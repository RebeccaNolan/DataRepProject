import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:4000/api/products')
        .then((response) => {
            setProducts(response.data.items);
        })
        .catch((error) => {
            console.error("Error finding products: ", error);
        });
    }, []);


    const handleViewProducts = (e) => {
        e.preventDefault();
        navigate('/Products');
    };

    const handleAddProducts = (e) => {
        e.preventDefault();
        navigate('/Add');
    };

  return (
    <div style={{textAlign: "center"}}>
      <h1>Welcome to Music World!</h1>

      <div>
        <Carousel>
            {products.map((product) => (
                <Carousel.Item key={product._id}>
                    <img
                        className='d-block w-100'
                        src = {product.image}
                        alt = {product.name}
                        style = {{height: "300px", objectFit: "contain"}}
                    />
                    {/* <Carousel.Caption>
                        <h3 style={{color: "#ffffff", backgroundColor: "#000000"}}>{product.name}</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
            ))}
        </Carousel>

        <h3>View our products or add your own!</h3>
      </div>

      <div style={{marginTop: "20px"}}>
        <Button variant="primary" onClick={handleViewProducts}>View Products</Button>
        <Button variant="success" onClick={handleAddProducts}>Add a Product</Button>
     
      </div>
      </div>
  );
}

export default Home;