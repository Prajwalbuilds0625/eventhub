function Events() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        Upcoming Events
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Tech Conference</h4>

              <p>
                Join developers and innovators
                from across the country.
              </p>

              <button className="btn btn-primary">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Music Festival</h4>

              <p>
                Enjoy live performances from
                top artists.
              </p>

              <button className="btn btn-primary">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Sports Tournament</h4>

              <p>
                Compete and enjoy exciting
                matches.
              </p>

              <button className="btn btn-primary">
                Register Now
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Events;