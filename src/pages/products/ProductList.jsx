import { useState } from "react";
import Modal from "../../components/common/Modal";
import Table from "../../components/common/Table";
import AddProductModal from "./AddProduct";

const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name_kh: "អាវកីឡា A",
      name_en: "Jersey A",
      category: "Football",
      cost_price: 8,
      sell_price: 12,
      sku: "JS-A",
      stock: 120,
    },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
    setOpen(false);
  };

  return (
    <div>
      <div style={styles.header}>
        <h1>Products</h1>
        <button style={styles.btn} onClick={() => setOpen(true)}>
          + Add Product
        </button>
      </div>

      <Table
        columns={[
          "Name (KH)",
          "Name (EN)",
          "Category",
          "Cost",
          "Price",
          "SKU",
          "Stock",
        ]}
        data={products.map((p) => ({
          name_kh: p.name_kh,
          name_en: p.name_en,
          category: p.category,
          cost: `$${p.cost_price}`,
          price: `$${p.sell_price}`,
          sku: p.sku,
          stock: p.stock,
        }))}
      />

      <AddProductModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addProduct}
      />
    </div>
  );
};

export default ProductList;