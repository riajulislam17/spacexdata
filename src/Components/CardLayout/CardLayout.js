import React from "react";

const CardLayout = (props) => {
  const { mission_name, launch_year } = props.spaceship;
  const { rocket_name, rocket_type } = props.spaceship.rocket;
  const { mission_patch, wikipedia } = props.spaceship.links;
  const { site_name } = props.spaceship.launch_site;
  const [{ manufacturer, orbit, nationality }] =
    props.spaceship.rocket.second_stage.payloads;

  return (
    <div>
      <div className="card h-100 shadow rounded border border-1 border-success">
        <div className="card-body">
          <img
            className="rounded-circle p-2 img-fluid"
            src={mission_patch}
            alt=""
          />
        </div>

        <div className="card-footer">
          <h4 className="text-center fw-bold">{rocket_name}</h4>
        </div>

        <div className="card-body">
          <h6 className="card-text">
            <span className="fw-bold">Mission Name:</span> {mission_name}
          </h6>
          <h6 className="card-text">
            <span className="fw-bold">Rocket Type:</span> {rocket_type}
          </h6>
          <h6 className="card-text">
            <span className="fw-bold">Launch Year:</span> {launch_year}
          </h6>
          <h6 className="card-text">
            <span className="fw-bold">Launching Site:</span> {site_name}
          </h6>
          <h6 className="card-text">
            <span className="fw-bold">Manufacturer:</span> {manufacturer}
          </h6>
          <h6 className="card-text">
            <span className="fw-bold">Orbit:</span> {orbit}
          </h6>
          <h6 className="card-text">
            <span className="fw-bold">Nationality:</span> {nationality}
          </h6>
        </div>
        <h6 className="card-footer">
          <span className="fw-bold">More Details:</span>{" "}
          <a
            className="text-decoration-none"
            href={wikipedia}
            target="_blank"
            rel="noreferrer"
          >
            See More
          </a>
        </h6>
      </div>
    </div>
  );
};

export default CardLayout;
