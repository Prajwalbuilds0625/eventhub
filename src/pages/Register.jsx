function Register() {
  return (
    <div className="container py-5">

      <h1>Register</h1>

      <form className="w-50 mx-auto">

        <input
          className="form-control mb-3"
          placeholder="Full Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-success w-100">
          Create Account
        </button>

      </form>

    </div>
  );
}

export default Register;