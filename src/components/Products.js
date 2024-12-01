import React, {useEffect, useState} from "react";
import axios from "axios";

const Products = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
        .then(response => setProducts(response.data.items))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Products</h1>

        </div>
    )
}

export default Products;