import React, { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const searchHandle = (e) => {
    e.preventDefault();
    console.log(searchText);
    e.target.reset();
  };

  return (
    <div className="container-fluid bg-dark sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <div className="container-fluid px-2 w-50">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="text-white text-center">SpaceX</h1>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form className="d-flex" onSubmit={searchHandle}>
            <select name="Launch Date" id="" className="mx-1 rounded">
              <option value="">Launch Date</option>
              <option value="">Last Week</option>
              <option value="">Last Month</option>
              <option value="">Last Year</option>
            </select>
            <select name="Launch Status" id="" className="mx-1 rounded">
              <option value="">Launch Status</option>
              <option value="">Failure</option>
              <option value="">Success</option>
            </select>
            <select name="Upcoming" id="" className="mx-1 rounded">
              <option value="">Upcoming</option>
              <option value="">True</option>
              <option value="">False</option>
            </select>
            <input
              className="form-control me-2 w-100"
              type="search"
              placeholder="Search by Rocket Name"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-success fw-bold" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
