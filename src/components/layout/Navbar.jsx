const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h3>Admin Panel</h3>
      <div>User</div>
    </div>
  );
};

const styles = {
  navbar: {
    height: 60,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)"
  }
};

export default Navbar;