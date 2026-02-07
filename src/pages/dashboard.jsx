import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
}
