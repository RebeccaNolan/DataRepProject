import Products from "./Products";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ViewProducts = () => {
    const [products, setProducts] = useState([]);

    const Reload = () => {
        console.log("Reloading data");
        axios.get('http://localhost:4000/api/products')
        .then((response) => {
            setProducts(response.data.items);
        })
        .catch((error) => {
            console.error("Error reloading", error);
        });
    };

    useEffect(() => {
        Reload();
    }, []);

    return(
        <div>
            <Products myItems = {products} reloadData = {Reload} />            
        </div>
    );
};

export default ViewProducts;