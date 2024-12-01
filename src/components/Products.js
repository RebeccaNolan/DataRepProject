import ProductItem from "./ProductItem";

function Products(props) {
    return (
        <>
            {props.myItems.map((item) => (
                <ProductItem
                    myitem={item}
                    key={item._id}
                    Reload={props.reloadData}
                />
            ))}
        </>
    );
}

export default Products;