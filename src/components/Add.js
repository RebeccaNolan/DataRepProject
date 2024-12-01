import axios from "axios";
import { useState } from "react";

function Add() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {name};
    console.log(product);

    axios.post('http://localhost:4000/api/products', product)
    .then((res) => {console.log(res.data)})
    .catch();
  }

  return (
    <div>
      <h2>This is my add Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add product name: </label>
          <input type="text"
            className="form-control"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add product name" />
      </form>
    </div>
  );
}

export default Add;