import axios from "axios";
import { useState } from "react";

const Add = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, type, price, image };
    console.log(product);

    axios.post('http://localhost:4000/api/products', product)
      .then((res) => { console.log(res.data) })
      .catch();
  }

  return (
    <div>
      <h2>Add a product</h2>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Add product" />
      </form>
    </div>
    
  );
}

export default Add;