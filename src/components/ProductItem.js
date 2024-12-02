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
      <Card>
        <Card.Header>{props.myitem.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myitem.image} alt={props.myitem.name}
              style={{ height: "200px", objectFit: "cover" }} />
            <footer>{props.myitem.price}</footer>
            <footer>{props.myitem.type}</footer>
          </blockquote>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
          <Link to={"/Update/" + props.myitem._id} className="btn btn-primary">Edit</Link>

        </Card.Body>
      </Card>

    </div>
  );
}

export default ProductItem;