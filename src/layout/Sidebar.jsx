import { Link } from 'react-router-dom'


export default function Sidebar(){
return (
<div className="w-64 min-h-screen bg-gray-900 text-white p-4 space-y-2">
<h2 className="text-xl font-bold mb-4">Inventory</h2>
<Link to="/" className="block">Dashboard</Link>
<Link to="/products" className="block">Products</Link>
<Link to="/stock-in" className="block">Stock In</Link>
<Link to="/stock-out" className="block">Stock Out</Link>
<Link to="/sales" className="block">Sales</Link>
<Link to="/sales-history" className="block">Sales History</Link>
<Link to="/reports/profit" className="block">Profit Report</Link>
<Link to="/reports/stock" className="block">Stock Report</Link>
<Link to="/users" className="block">Users</Link>
</div>
)
}