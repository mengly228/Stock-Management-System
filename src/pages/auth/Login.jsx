export default function Login(){
return (
<div>
<h1 className="text-xl">Login</h1>
<input className="border p-2" placeholder="Phone or Email" />
<input className="border p-2" placeholder="Password" type="password" />
<button className="bg-blue-500 text-white px-4 py-2">Login</button>
</div>
)
}