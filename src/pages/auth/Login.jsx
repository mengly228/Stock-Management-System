import { useAuth } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate("/"); // redirect to dashboard
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: 20 }}>Stock Management System</h2>

        <button
          style={styles.owner}
          onClick={() => handleLogin("owner")}
        >
          Login as Owner
        </button>

        <button
          style={styles.staff}
          onClick={() => handleLogin("staff")}
        >
          Login as Staff
        </button>

        <p style={styles.note}>
          * Demo login (API later)
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f2f6",
  },
  card: {
    width: 350,
    background: "#fff",
    padding: 30,
    borderRadius: 8,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  owner: {
    width: "100%",
    padding: 12,
    background: "#0984e3",
    color: "#fff",
    border: "none",
    marginBottom: 10,
    cursor: "pointer",
  },
  staff: {
    width: "100%",
    padding: 12,
    background: "#636e72",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  note: {
    marginTop: 15,
    fontSize: 12,
    color: "#999",
  },
};

export default Login;