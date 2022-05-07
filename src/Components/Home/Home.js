import React, { useEffect, useState } from "react";
import CardLayout from "../CardLayout/CardLayout";

const Home = () => {
  const [spaceships, setSpaceships] = useState([]);

  useEffect(() => {
    const url = "https://api.spacexdata.com/v3/launches";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSpaceships(data));
  }, []);

  return (
    <div className="container-fluid rounded">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 border border-0 py-3">
        {spaceships.slice(0,110).map((spaceship) => (
          <CardLayout key={spaceship.flight_number} spaceship={spaceship} />
        ))}
      </div>
    </div>
  );
};

export default Home;
