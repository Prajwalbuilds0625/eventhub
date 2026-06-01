import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Login</h1>

      <form
        className="w-50 mx-auto"
        onSubmit={handleLogin}
      >

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          required
        />

        <button className="btn btn-dark w-100">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;