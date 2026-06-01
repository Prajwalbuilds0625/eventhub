function Contact() {
  return (
    <div className="container py-5">

      <h1>Contact Us</h1>

      <form>

        <input
          className="form-control mb-3"
          placeholder="Name"
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Message"
        ></textarea>

        <button className="btn btn-primary">
          Send
        </button>

      </form>

    </div>
  );
}

export default Contact;