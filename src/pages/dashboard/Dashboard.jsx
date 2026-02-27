import StatCard from "../../components/common/StatCard";
import Table from "../../components/common/Table";

const Dashboard = () => {
  const stats = [
    { title: "Total Products", value: 120, color: "#0984e3" },
    { title: "Current Stock", value: 3400, color: "#00b894" },
    { title: "Low Stock Items", value: 8, color: "#d63031" },
    { title: "Today Profit ($)", value: 250, color: "#6c5ce7" },
  ];

  const bestSelling = [
    { name: "Football Jersey A", sold: 120, revenue: "$1,200" },
    { name: "Training Shirt B", sold: 90, revenue: "$900" },
    { name: "Short Pants C", sold: 75, revenue: "$750" },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Dashboard</h1>

      {/* Stat Cards */}
      <div style={styles.grid}>
        {stats.map((s) => (
          <StatCard
            key={s.title}
            title={s.title}
            value={s.value}
            color={s.color}
          />
        ))}
      </div>

      {/* Best Selling Table */}
      <div style={{ marginTop: 30 }}>
        <h3>Best Selling Products</h3>
        <Table
          columns={["Product", "Sold Qty", "Revenue"]}
          data={bestSelling}
        />
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
  },
};

export default Dashboard;