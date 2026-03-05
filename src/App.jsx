import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/layout/Sidebar";
import StockIn from "./pages/stock/StockIn";
import StockOut from "./pages/stock/StockOut";
import SalesEntry from "./pages/sales/SalesEntry";
import SalesHistory from "./pages/sales/SalesHistory";
import ProfitReport from "./pages/reports/ProfitReport";
import StockReport from "./pages/reports/StockReport";
import UserList from "./pages/users/UserList";
import RoleManagement from "./pages/users/RoleManagement";

function App() {
  return <AppRoutes />;
}

export default App;
