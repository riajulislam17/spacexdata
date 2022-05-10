import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterLaunchStatus,
  filterUpcomingStatus,
  findSpaceships,
  filterLaunchDateStatus,
} from "../../ReduxComponents/Slices/SpaceshipSlices";

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

  const handleFilterLaunchDate = (e) => {
    e.preventDefault();

    if (e.target.value === "day") {
      const unixDay = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
      dispatch(filterLaunchDateStatus(unixDay));
    } else if (e.target.value === "month") {
      const unixMonth = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;
      dispatch(filterLaunchDateStatus(unixMonth));
    } else if (e.target.value === "year") {
      const unixYear = new Date().getTime() - 365 * 24 * 60 * 60 * 1000;
      dispatch(filterLaunchDateStatus(unixYear));
    }
  };

  return (
    <div className="container-fluid bg-dark sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 className="text-light">SpaceX</h1>
          </a>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-flex flex-lg-nowrap flex-wrap ms-auto">
              <select
                name="Launch Date"
                className="m-1 rounded"
                onChange={handleFilterLaunchDate}
              >
                <option>Select Launch Date</option>
                <option value="day">Launch Last Week</option>
                <option value="month">Launch Last Month</option>
                <option value="year">Launch Last Year</option>
              </select>

              <select
                name="Launch Status"
                className="m-1 rounded"
                onChange={handleFilterLaunchStatus}
              >
                <option>Select Launch Status</option>
                <option value="1">Launch Success</option>
                <option value="0">Launch Failure</option>
              </select>

              <select
                name="Upcoming"
                className="m-1 rounded"
                onChange={handleFilterUpcomingStatus}
              >
                <option>Select Upcoming</option>
                <option value="1">Upcoming Yes</option>
                <option value="0">Upcoming No</option>
              </select>

              <form name="search" className="d-flex" onSubmit={handleSearch}>
                <input
                  className="form-control w-75 m-1 "
                  type="search"
                  placeholder="Search by Rocket Name"
                  aria-label="Search"
                  onChange={(e) => setSearchText(e.target.value)}
                  required
                />
                <button className="btn btn-success shadow fw-bold m-1" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div className="text-light fw-bolder text-center py-3">
        <h3>
          <strong className="py-2 px-5 rounded shadow-lg border border-light border-2">
            {spaceships.length} Result Found
          </strong>
        </h3>
      </div>
    </div>
  );
};

export default Header;
