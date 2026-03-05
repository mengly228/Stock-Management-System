import { useState } from "react";

export default function SalesEntry() {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sale Added");
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">New Sale</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="border p-2 w-full"
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Save Sale
        </button>

      </form>

    </div>
  );
}