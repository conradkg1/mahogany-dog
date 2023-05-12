
import React from 'react';

const Home = (props) => {
  const handleClick = (e) => {
    console.log(e.target.textContent);
    props.setPage(e.target.textContent);
  };
  
      return (
        <> 
         {/* bootstrap */}
  <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<link rel="stylesheet" href="./css/style.css" />
{/* icons */}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"

/>

{/* navbar */}
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand">Conrad Gregory</a>
        <button
          className="navbar-toggler"
          type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#my-work">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
{/* hero */}
<section id="about-me" className="bg-light p-5">
  <div className="container">
    <h1 className="display-4">Hi!</h1>
    <p className="lead">
    I'm a fullstack developer skilled in technologies such as Javascript, HTML, CSS, SQL, Node, Express, React, and Third Party APIs.
    </p>
  </div>
</section>
{/*content */}
<main>
  <section id="my-work" className="work">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>My Work</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card border-primary mb-4" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Employee tracker</h5>
                    <p className="card-text">SQL based employee tracker.</p>
                    <a href="https://github.com/conradkg1/fuscia-platypus" className="btn btn-primary">
                      <i className="bi bi-github" /> View
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-primary mb-4" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Note Taker</h5>
                    <p className="card-text">Express.js note taker.</p>
                    <a href="https://github.com/conradkg1/crimson-rhinoceros" className="btn btn-primary">
                      <i className="bi bi-github" /> View
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-primary mb-4" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">README Generator</h5>
                    <p className="card-text">A simple README.md generator.</p>
                    <a href="https://github.com/conradkg1/purple-hare" className="btn btn-primary">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<section id="contact" className="contact">
  <div className="container">
    <h2>Contact Me</h2>
    <p>Email - conradkg1@gmail.com</p>
  </div>
</section>
<footer className="bg-light py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <a href="https://github.com/conradkg1">
          <i className="bi bi-github fs-2 me-3" />
        </a>
      </div>
    </div>
  </div>
</footer>
</>
      )
}

export default Home; 
