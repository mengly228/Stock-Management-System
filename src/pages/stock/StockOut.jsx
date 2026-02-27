import { useState } from "react";

const StockOut = () => {
  const [qty, setQty] = useState("");

  return (
    <div>
      <h1>Stock Out</h1>

      <input
        placeholder="Quantity"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <button>Remove Stock</button>
    </div>
  );
};

export default StockOut;