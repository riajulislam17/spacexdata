import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterLaunchStatus, filterUpcomingStatus, findSpaceships } from "../../ReduxComponents/Slices/SpaceshipSlices";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const spaceships = useSelector((state) => state.spaceships.displayResultList);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(findSpaceships(searchText));
    e.target.reset();
  };

  const handleFilterLaunchStatus = (e) => {
    e.preventDefault();
    dispatch(filterLaunchStatus(e.target.value));
  };

  const handleFilterUpcomingStatus = (e) => {
    e.preventDefault();
    dispatch(filterUpcomingStatus(e.target.value));
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
            <div className="d-flex flex-lg-nowrap flex-wrap ms-auto">
              <select name="Launch Date" id="" className="m-1 rounded">
                <option value="">Launch Date</option>
                <option value="">Last Week</option>
                <option value="">Last Month</option>
                <option value={new Date().getFullYear()}>Last Year</option>
              </select>

              <select
                name="Launch Status"
                className="m-1 rounded"
                onChange={handleFilterLaunchStatus}
              >
                <option>Launch Status</option>
                <option value="1">Success</option>
                <option value="0">Failure</option>
              </select>

              <select
                name="Upcoming"
                className="m-1 rounded"
                onChange={handleFilterUpcomingStatus}
              >
                <option value="2">Upcoming</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>

              <form name="search" className="d-flex" onSubmit={handleSearch}>
                <input
                  className="form-control w-75 m-1 "
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
        </div>
      </nav>
      <div className="text-warning fw-bold text-center pb-3">
        <h3 className="mx-2 p-1 border border-danger border-3">Shown Result: {spaceships.length}</h3>
      </div>
    </div>
  );
};

export default Header;
