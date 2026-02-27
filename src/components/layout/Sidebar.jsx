import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>StockSys</h2>

      <nav>
        <MenuItem to="/">Dashboard</MenuItem>

        <Section title="Products">
          <MenuItem to="/products">Product List</MenuItem>
        </Section>

        <Section title="Stock">
          <MenuItem to="/stock-in">Stock In</MenuItem>
          <MenuItem to="/stock-out">Stock Out</MenuItem>
        </Section>

        <Section title="Sales">
          <MenuItem to="/sales">New Sale</MenuItem>
          <MenuItem to="/sales-history">Sales History</MenuItem>
        </Section>

        <Section title="Reports">
          <MenuItem to="/profit-report">Profit Report</MenuItem>
          <MenuItem to="/stock-report">Stock Report</MenuItem>
        </Section>

        <Section title="Users">
          <MenuItem to="/users">User List</MenuItem>
          <MenuItem to="/roles">Roles</MenuItem>
        </Section>
      </nav>
    </div>
  );
};

const MenuItem = ({ to, children }) => (
  <Link to={to} style={styles.link}>
    {children}
  </Link>
);

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 10 }}>
    <p style={styles.section}>{title}</p>
    {children}
  </div>
);

const styles = {
  sidebar: {
    width: 240,
    background: "#1e272e",
    color: "#fff",
    padding: 20
  },
  logo: {
    marginBottom: 30
  },
  section: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 15
  },
  link: {
    display: "block",
    color: "#fff",
    textDecoration: "none",
    padding: "8px 0"
  }
};

export default Sidebar;