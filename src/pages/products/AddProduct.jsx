import { useState } from "react";
import Modal from "../../components/common/Modal";

const AddProductModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name_kh: "",
    name_en: "",
    category: "",
    cost_price: "",
    sell_price: "",
    sku: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    onSave({
      ...form,
      cost_price: Number(form.cost_price),
      sell_price: Number(form.sell_price),
      stock: Number(form.stock),
    });
  };

  return (
    <Modal open={open} title="Add Product" onClose={onClose}>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key.replace("_", " ")}
          value={form[key]}
          onChange={handleChange}
          style={styles.input}
        />
      ))}

      <button style={styles.btn} onClick={submit}>
        Save
      </button>
    </Modal>
  );
};

const styles = {
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 10,
  },
  btn: {
    width: "100%",
    padding: 10,
    background: "#0984e3",
    color: "#fff",
    border: "none",
  },
};

export default AddProductModal;