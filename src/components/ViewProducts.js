import Products from "./Products";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewProducts = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const Reload = () => {
        axios.get('http://localhost:4000/api/products')
            .then((response) => {
                const items = response.data.items;

                setProducts(items);
                setFilteredProducts(items);

                //add category to list if it doesn't already exist (case-insensitive)
                const uniqueCategory = ["All"];
                items.forEach((item) => {
                    const normalizedType = item.type.toLowerCase();
                    if (!uniqueCategory.some((category) => category.toLowerCase() === normalizedType)) {
                        uniqueCategory.push(item.type);
                    }
                });

                //update state
                setCategories(uniqueCategory);
            })
            .catch((error) => {
                console.error("Error reloading", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

    //display all products or the filtered products
    const filterProducts = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredProducts(products);
        }
        else {
            setFilteredProducts(products.filter((product) => product.type.toLowerCase() === category.toLowerCase()));
        }
    };

    //filter drop down
    return (
        <div className="mb-3" style={{ maxWidth: "600px", margin: "20px auto" }}>
            <label htmlFor="categoryFilter" className="form-label">Filter by Category</label>
            <select
                id="categoryFilter"
                className="form-select"
                value={selectedCategory}
                onChange={(e) => filterProducts(e.target.value)}
            >
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>

            <Products myItems={filteredProducts} reloadData={Reload} />
        </div>
    );
};

export default ViewProducts;