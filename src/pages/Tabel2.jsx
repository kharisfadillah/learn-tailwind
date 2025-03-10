import { useState } from "react";

const EditableTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "User" },
  ]);

  const handleEdit = (id, field, value) => {
    setUsers(users.map(user => user.id === id ? { ...user, [field]: value } : user));
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <table className="w-1/2 rounded-md overflow-hidden ring-1 ring-gray-950/15">
        <thead>
          <tr className="bg-gray-50 border-b rounded-t-xl">
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Name</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Email</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Role</th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-950/15 rounded-b-xl">
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 text-gray-950 text-sm">
                <input 
                  type="text" 
                  value={user.name} 
                  onChange={(e) => handleEdit(user.id, "name", e.target.value)}
                  className="border-none bg-transparent focus:ring-0 focus:outline-none w-full"
                />
              </td>
              <td className="px-4 py-2 text-gray-950 text-sm">
                <input 
                  type="email" 
                  value={user.email} 
                  onChange={(e) => handleEdit(user.id, "email", e.target.value)}
                  className="border-none bg-transparent focus:ring-0 focus:outline-none w-full"
                />
              </td>
              <td className="px-4 py-2 text-gray-950 text-sm">
                <input 
                  type="text" 
                  value={user.role} 
                  onChange={(e) => handleEdit(user.id, "role", e.target.value)}
                  className="border-none bg-transparent focus:ring-0 focus:outline-none w-full"
                />
              </td>
              <td className="px-4 py-2 text-gray-950 text-sm space-x-2">
                <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Tabel2() {
  return <EditableTable />;
}
