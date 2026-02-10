import AppRoutes from './routes/AppRoutes'
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'


export default function App() {
return (
<div className="flex">
<Sidebar />
<div className="flex-1">
<Navbar />
<div className="p-4">
<AppRoutes />
</div>
</div>
</div>
)
}