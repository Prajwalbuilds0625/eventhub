import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <div className="container py-5">

        <h2 className="text-center mb-5">
          Featured Events
        </h2>
        <div className="container py-5">

  <h2 className="text-center mb-5">
    Upcoming Events
  </h2>

  <div className="row">

    <div className="col-md-3 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5>Tech Summit 2026</h5>
          <p>15 June 2026</p>
          <p>Pune</p>
        </div>
      </div>
    </div>

    <div className="col-md-3 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5>Music Night</h5>
          <p>20 June 2026</p>
          <p>Mumbai</p>
        </div>
      </div>
    </div>

    <div className="col-md-3 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5>Startup Expo</h5>
          <p>28 June 2026</p>
          <p>Bangalore</p>
        </div>
      </div>
    </div>

    <div className="col-md-3 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5>Gaming Fest</h5>
          <p>30 June 2026</p>
          <p>Delhi</p>
        </div>
      </div>
    </div>

  </div>

</div>
        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                className="card-img-top"
                alt="event"
              />

              <div className="card-body">
                <h5>Music Festival</h5>

                <p>
                  Experience live music performances.
                </p>

                <button className="btn btn-primary">
                  View Details
                </button>
              </div>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                className="card-img-top"
                alt="event"
              />

              <div className="card-body">
                <h5>Tech Conference</h5>

                <p>
                  Meet innovators and developers.
                </p>

                <button className="btn btn-primary">
                  View Details
                </button>
              </div>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">

              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
                className="card-img-top"
                alt="event"
              />

              <div className="card-body">
                <h5>Sports Event</h5>

                <p>
                  Participate and enjoy competitions.
                </p>

                <button className="btn btn-primary">
                  View Details
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;