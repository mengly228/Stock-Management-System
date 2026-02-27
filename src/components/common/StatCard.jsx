const StatCard = ({ title, value, color }) => {
  return (
    <div style={{ ...styles.card, borderLeft: `5px solid ${color}` }}>
      <p style={styles.title}>{title}</p>
      <h2 style={styles.value}>{value}</h2>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    marginTop: 10,
  },
};

export default StatCard;