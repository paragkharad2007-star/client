import { NavLink } from "react-router-dom";

const linkClass =
  "block px-4 py-2 rounded hover:bg-gray-200 transition";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-6">SaaS</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/analytics" className={linkClass}>
          Analytics
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
