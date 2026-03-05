import { useState } from "react";

export default function ProductList() {
  const [products] = useState([
    { id: 1, name: "Football Jersey", category: "Sport", price: 10, stock: 120 },
    { id: 2, name: "Training Shirt", category: "Gym", price: 15, stock: 50 },
  ]);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Product List</h2>
        <button className="btn-primary">+ Add Product</button>
      </div>

      <input placeholder="Search product..." />

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}