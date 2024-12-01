import { useEffect } from "react"
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const ProductItem = (props) => {
    useEffect(() => {
        console.log("Product item: ", props.myitem); //log for debug
    }, [props.myitem]); //only run when prop changes

    return (
        <div>
          <Card>
            <Card.Header>{props.myitem.name}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <img src={props.myitem.image} alt={props.myitem.name} />
                <footer>{props.myitem.price}</footer>
              </blockquote>
            </Card.Body>
             </Card>
          {/*Added button*/}
          <Button >Delete</Button>
        </div>
      );
}

export default ProductItem;