import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findSpaceships } from "../../ReduxComponents/Slices/SpaceshipSlices";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const spaceships = useSelector((state) => state.spaceships.spaceshipList);
  const searchResults = useSelector(
    (state) => state.spaceships.searchSpaceshipsList
  );


  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(findSpaceships(searchText));
    e.target.reset();
  };

  return (
    <div className="container-fluid bg-dark sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 className="text-light">SpaceX</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form
              className="d-flex flex-lg-nowrap flex-wrap ms-auto"
              onSubmit={handleSearch}
            >
              <select name="Launch Date" id="" className="m-1 rounded">
                <option value="">Launch Date</option>
                <option value="">Last Week</option>
                <option value="">Last Month</option>
                <option value="">Last Year</option>
              </select>
              <select name="Launch Status" id="" className="m-1 rounded">
                <option value="">Launch Status</option>
                <option value="">Failure</option>
                <option value="">Success</option>
              </select>
              <select name="Upcoming" id="" className="m-1 rounded">
                <option value="">Upcoming</option>
                <option value="">True</option>
                <option value="">False</option>
              </select>
              <input
                className="form-control w-50 m-1 "
                type="search"
                placeholder="Search by Rocket Name"
                aria-label="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-success fw-bold m-1" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="text-warning fw-bold text-center pb-3">
        <h1>Total Result {spaceships.length}</h1>
        <h1>Search Result {searchResults.length}</h1>
      </div>
    </div>
  );
};

export default Header;
