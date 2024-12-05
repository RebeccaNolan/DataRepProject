import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

//export edit componenet
export default function Update(props) {
    let { id } = useParams();

    //variables to store movies
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate(); //hook to navigate routes

    useEffect(() => {
        axios.get('http://localhost:4000/api/products/' + id)
            .then((response) => {
                //populate state vars with response data
                setName(response.data.name);
                setType(response.data.type);
                setPrice(response.data.price);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]); //dependency - runs when id changes

    const handleSubmit = (event) => {
        event.preventDefault();
        const editProduct = { id, name, type, price, image };
        //send PUT request
        axios.put('http://localhost:4000/api/products/' + id, editProduct)
            .then((res) => {
                console.log(res.data);
                navigate('/products');
            });
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/Products');
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", minHeight: "70vh" }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
                <div className="form-group">
                    <label>Product Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Product type: </label>
                    <input type="text"
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Image: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </div>
                <input type="submit" value="Edit Product" style={{ margin: "20px", color: "#fcfcfc", backgroundColor: "#830fdb", border: "none", borderRadius:"5px",padding:"10px 10px" }} />
                <button onClick={handleCancel} style={{ margin: "20px", color: "#fcfcfc", backgroundColor: "#830fdb", border: "none", borderRadius:"5px",padding:"10px 10px" }}>Cancel</button>
            </form>
        </div>
    );
}
