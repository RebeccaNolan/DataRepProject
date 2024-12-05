import { useEffect } from "react"
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const ProductItem = (props) => {
  useEffect(() => {
    console.log("Product item: ", props.myitem); //log for debug
  }, [props.myitem]); //only run when prop changes

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

  return (
    <div>
      <Card style={{ width: "18rem", height: "25rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
        <Card.Header>{props.myitem.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myitem.image} alt={props.myitem.name}
              style={{ height: "200px", objectFit: "contain", width: "100%" }} />
            <footer>{props.myitem.price}</footer>
            <footer>{props.myitem.type}</footer>
          </blockquote>
          <div style={{textAlign: "center", marginTop:"10px"}}>
            <Button onClick={handleDelete} style={{ margin: "5px", backgroundColor: "#0954ab" }}>Delete</Button>
            <Link to={"/Update/" + props.myitem._id} className="btn btn-primary" style={{ margin: "5px", backgroundColor: "#0bb8d6" }}>Edit</Link>
          </div>
        </Card.Body>
      </Card>

    </div>
  );
}

export default ProductItem;