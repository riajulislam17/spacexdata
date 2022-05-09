import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceships } from "../../ReduxComponents/Slices/SpaceshipSlices";
import CardLayout from "../CardLayout/CardLayout";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceships());
  }, [dispatch]);

  const spaceships = useSelector((state) => state.spaceships.spaceshipList);
  const searchResults = useSelector(
    (state) => state.spaceships.searchSpaceshipsList
  );

  return (
    <div className="container-fluid rounded">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 border border-0 py-3">
        {searchResults.length === 0 ?
          spaceships.map((spaceship) => (
              <CardLayout key={spaceship.flight_number} spaceship={spaceship} />
            ))
            :
            searchResults.map((spaceship) => (
              <CardLayout key={spaceship.flight_number} spaceship={spaceship} />
            ))
        }
      </div>
    </div>
  );
};

export default Home;
