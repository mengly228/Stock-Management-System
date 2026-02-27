import { useState } from "react";

const StockIn = () => {
  const [qty, setQty] = useState("");

  return (
    <div>
      <h1>Stock In</h1>

      <input
        placeholder="Quantity"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <button>Add Stock</button>
    </div>
  );
};

export default StockIn;