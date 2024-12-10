import { CardGroup } from "react-bootstrap";
import ProductItem from "./ProductItem";

function Products(props) {
    return (

        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap: "20px", marginTop:"20px"}}>
            <CardGroup>
                {props.myItems.map((item) => (
                    <ProductItem
                        myitem={item}
                        key={item._id}
                        Reload={props.reloadData}
                    />
                ))}
            </CardGroup>
        </div>
    );
}

export default Products;