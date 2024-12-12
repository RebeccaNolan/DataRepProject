import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const ProductItem = (props) => {
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    console.log("Product item: ", props.myitem);
    //retrieve wishlist from localStorage and check if current item is in wishlist
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []; 
    setInWishlist(wishlist.some((item) => item._id === props.myitem._id));
  }, [props.myitem]); //only run when prop changes

  //delete a product
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/products/' + props.myitem._id)
      .then(() => {
        props.Reload();
      })
      .catch((error) => {
        console.error("error deleting item: ", error);
      });
  };

  //saves wishlist to localStorage
  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (inWishlist) {
      //if item already in list - remove 
      wishlist = wishlist.filter((item) => item._id !== props.myitem._id);
    }
    else {
      //else add item to wishlist
      wishlist.push(props.myitem);
    }

    //save updated wishlist
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setInWishlist(!inWishlist);
  };

  return (
    <div>
      <Card
        style={{
          width: "18rem", height: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "flex",
          flexDirection: "column", justifyContent: "space-between"
        }}>
        <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}> {props.myitem.name} </Card.Header>
        <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px" }}>

          <img src={props.myitem.image} alt={props.myitem.name} style={{ height: "150px", objectFit: "contain", width: "100%" }} />

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>{props.myitem.price}</p>
            <p style={{ margin: "5px 0", color: "#555" }}>{props.myitem.type} </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Delete and Edit Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <Button onClick={handleDelete} style={{ backgroundColor: "#0954ab", border: "none" }} > Delete</Button>
              <Link to={"/Update/" + props.myitem._id} className="btn btn-primary" style={{ backgroundColor: "#0bb8d6", border: "none" }}>Edit</Link>
            </div>

            {/* Wishlist Button */}
            <Button onClick={handleWishlist} style={{
              backgroundColor: inWishlist ? "red" : "green",
              color: "#fff", border: "none"
            }}> {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"} </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;