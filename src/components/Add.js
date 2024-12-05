import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!name || !type || !price || !image) {
      setError("Please fill out all fields");
      return;
    }

    //reset error
    setError('');

    const product = { name, type, price, image };
    console.log(product);

    axios.post('http://localhost:4000/api/products', product)
      .then((res) => {
        console.log(res.data);
        navigate('/products');
      })
      .catch((error) => {
        console.error("Can't add product: ", error);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/Products');
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" ,minHeight: "70vh"}}>
      <h2>Add a product</h2>
       {/* Validation error message */}
       {error && (
            <p style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>
                {error}
            </p>
        )}
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div className="form-group">
          <label>Name: </label>
          <input type="text"
            className="form-control"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Type: </label>
          <input type="text"
            className="form-control"
            value={type}
            onChange={(e) => { setType(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Price: </label>
          <input type="text"
            className="form-control"
            value={price}
            onChange={(e) => { setPrice(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Image URL: </label>
          <input type="text"
            className="form-control"
            value={image}
            onChange={(e) => { setImage(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add" style={{ margin: "20px", color: "#fcfcfc", backgroundColor: "#0bb8d6", border: "none", borderRadius:"5px",padding:"10px 10px" }} />
        <button onClick={handleCancel} style={{ margin: "20px", color: "#fcfcfc", backgroundColor: "#0bb8d6", border: "none", borderRadius:"5px",padding:"10px 10px" }}>Cancel</button>
      </form>
    </div>

  );
}
//image URLs
//Ibanez GIO series  https://m.media-amazon.com/images/I/61qOTlqgjIL.__AC_SX300_SY300_QL70_ML2_.jpg
//Ibanez GIO stealth series  https://m.media-amazon.com/images/I/61+SxsQZ5jL._AC_SY300_SX300_.jpg

export default Add;