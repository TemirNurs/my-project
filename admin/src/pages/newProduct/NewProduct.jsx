import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {
const [inputs, setInputs] = useState({});
const [file, setFile] = useState(null);
const [cat, setCat] = useState([]);

  const handleChange = (e)=>{
    setInputs(prev=>{
      return{...prev, [e.target.name]:e.target.value}
    })
  };
  
  const handleCategory = (e)=>{
      setCat(e.target.value.split(","));
  };

  const handleClick = (e) =>{
    e.prevent.default
    // to do
  }
  

  

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={setFile(e.target.files)[0]} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="decription"
            type="text"
            placeholder="Description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="100" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input
            type="text"
            placeholder="man, woman, kind"
            onChange={handleCategory}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" id="" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
