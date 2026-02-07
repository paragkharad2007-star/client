import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  // ✅ Hooks FIRST (no conditions before this)
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Redirect AFTER hooks
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("User not found. Please sign up.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Login failed. Try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 underline">
            Sign up
          </a>
        </p>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}
      </form>
    </div>
  );
}
