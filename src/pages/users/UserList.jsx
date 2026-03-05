import { useState } from "react";

export default function UserList() {
  const [users] = useState([
    {
      id: 1,
      name: "Admin User",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Staff User",
      email: "staff@gmail.com",
      role: "Staff",
      status: "Active",
    },
  ]);

  return (
    <div className="page">
      <div className="page-header">
        <h2>User List</h2>
        <button className="btn-primary">+ Add User</button>
      </div>

      <input placeholder="Search user..." />

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.status}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}