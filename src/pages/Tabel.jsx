import { useState } from "react";

const StyledTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "User",
    },
  ]);
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    role: "",
  });

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData(user);
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingUser(null);
    setFormData({ id: null, name: "", email: "", role: "" });
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingUser) {
      setUsers(
        users.map((user) => (user.id === editingUser.id ? formData : user))
      );
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <button
        onClick={handleAdd}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add User
      </button>
      <table className="w-1/2 rounded-md overflow-hidden ring-1 ring-gray-950/15">
        <thead>
          <tr className="bg-gray-50 border-b rounded-t-xl">
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">
              Email
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">
              Role
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-950/15 rounded-b-xl">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 text-gray-950 text-sm">{user.name}</td>
              <td className="px-4 py-2 text-gray-950 text-sm">{user.email}</td>
              <td className="px-4 py-2 text-gray-950 text-sm">{user.role}</td>
              <td className="px-4 py-2 text-gray-950 text-sm space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">
              {editingUser ? "Edit User" : "Add User"}
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded-md"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Tabel() {
  return <StyledTable />;
}
