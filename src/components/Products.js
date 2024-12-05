import { CardGroup, Container } from "react-bootstrap";
import ProductItem from "./ProductItem";

function Products(props) {
    return (

        <Container style={{ textAlign: "center", marginTop: "20px" }}>
            <CardGroup>
                {props.myItems.map((item) => (
                    <ProductItem
                        myitem={item}
                        key={item._id}
                        Reload={props.reloadData}
                    />
                ))}
            </CardGroup>
        </Container>
    );
}

export default Products;