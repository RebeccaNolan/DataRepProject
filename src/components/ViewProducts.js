import Products from "./Products";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewProducts = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const Reload = () => {
        console.log("Reloading data");
        axios.get('http://localhost:4000/api/products')
            .then((response) => {
                //setProducts(response.data.items);
                const items = response.data.items;

                setProducts(items);
                setFilteredProducts(items);

                const uniqueCategory = ["All"];
                items.forEach((item) => {
                    if (!uniqueCategory.includes(item.type)) {
                        uniqueCategory.push(item.type);
                    }
                });

                setCategories(uniqueCategory);
            })
            .catch((error) => {
                console.error("Error reloading", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

    const filterProducts = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredProducts(products);
        }
        else {
            setFilteredProducts(products.filter((product) => product.type === category));
        }
    };

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
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>

<br></br>
<br></br>
<br></br>
            <Products myItems={filteredProducts} reloadData={Reload} />
        </div>
    );
};

export default ViewProducts;