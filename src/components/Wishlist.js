import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(savedWishlist);
    }, []);

    const handleRemove = (id) => {
        const updatedWishlist = wishlist.filter((item) => item._id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>My Wishlist</h2>
            {wishlist.length > 0 ? (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {wishlist.map((item) => (
                        <Card key={item._id} style={{ width: "18rem", margin: "10px" }}>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <img src={item.image} alt={item.name} style={{ height: "150px", objectFit: "contain", width: "100%" }} />
                                <footer>{item.price}</footer>
                                <footer>{item.type}</footer>
                                <Button onClick={() => handleRemove(item._id)} style={{ marginTop: "10px", backgroundColor: "red", color: "#fff" }}>Remove</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>) : (<p>Wishlist is empty... </p>)}
        </div>
    );
};

export default Wishlist;
