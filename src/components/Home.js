import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        //fetch products 
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
        navigate('/products');
    };

    const handleAddProducts = (e) => {
        e.preventDefault();
        navigate('/add');
    };

    //carousel to display products with buttons for navigation
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to Music World!</h1>

            <div style={{ padding: "20px" }}>
                <Carousel
                 nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ filter: 'invert(1)' }} />}
                 prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ filter: 'invert(1)' }} />}>
                    {products.map((product) => (
                        <Carousel.Item key={product._id}>
                            <img
                                className='d-block w-100'
                                src={product.image}
                                alt={product.name}
                                style={{ height: "300px", objectFit: "contain" }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <h3>View our products or add your own!</h3>
            <div style={{ marginTop: "20px" }}>
                <Button variant="primary" onClick={handleViewProducts}>View Products</Button>
                <Button variant="success" onClick={handleAddProducts}>Add a Product</Button>
            </div>
        </div>
    );
}

export default Home;