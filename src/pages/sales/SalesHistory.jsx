export default function SalesHistory() {
  const sales = [
    { id: 1, product: "Football Jersey A", qty: 2, total: 20 },
    { id: 2, product: "Training Shirt B", qty: 3, total: 24 },
  ];

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">Sales History</h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td className="border p-2">{sale.id}</td>
              <td className="border p-2">{sale.product}</td>
              <td className="border p-2">{sale.qty}</td>
              <td className="border p-2">${sale.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}