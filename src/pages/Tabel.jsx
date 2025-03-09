const StyledTable = () => {
    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full rounded-xl overflow-hidden ring-1 ring-gray-950/15">
                <thead>
                    <tr className="bg-gray-50 border-b rounded-t-xl">
                        <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Name</th>
                        <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Email</th>
                        <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Role</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-950/15 rounded-b-xl">
                    <tr className="hover:bg-gray-50 transition">
                        <td className="px-4 py-1 text-gray-950 text-sm">John Doe</td>
                        <td className="px-4 py-1 text-gray-950 text-sm">john@example.com</td>
                        <td className="px-4 py-1 text-gray-950 text-sm">Admin</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                        <td className="px-4 py-1 text-gray-950 text-sm">Jane Smith</td>
                        <td className="px-4 py-1 text-gray-950 text-sm">jane@example.com</td>
                        <td className="px-4 py-1 text-gray-950 text-sm">Editor</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                        <td className="px-4 py-1 text-gray-950 text-sm">Michael Brown</td>
                        <td className="px-4 py-1 text-gray-950 text-sm">michael@example.com</td>
                        <td className="px-4 py-1 text-gray-950 text-sm">User</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default function Tabel() {
    return (
        <StyledTable />
    );
}