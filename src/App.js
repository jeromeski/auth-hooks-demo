import "./styles.css";
import Login from "./pages/auth/Login";
import AuthProvider from "./context/auth.context";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
      </div>
    </AuthProvider>
  );
}
