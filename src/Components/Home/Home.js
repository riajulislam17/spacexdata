import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceships } from "../../ReduxComponents/Slices/SpaceshipSlices";
import CardLayout from "../CardLayout/CardLayout";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceships());
  }, [dispatch]);

  const displayList = useSelector(
    (state) => state.spaceships.displayResultList
  );

  const status = useSelector((state) => state.spaceships.status);

  const size = 8;
  const totalPages = Math.ceil(displayList.length / size);
  const [page, setPage] = useState(1);
  const endPoint = page * size;
  const startPoint = endPoint - size;

  return (
    <div className="container-fluid rounded">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 border border-0 py-3">
        {displayList.length <= size
          ? displayList.map((spaceship, index) => (
              <CardLayout key={index} spaceship={spaceship} />
            ))
          : displayList
              .slice(startPoint, endPoint)
              .map((spaceship, index) => (
                <CardLayout key={index} spaceship={spaceship} />
              ))}
      </div>
      {status === "pending" && <Loading></Loading>}
      {displayList.length === 0 && status === "success" && (
        <NotFound></NotFound>
      )}

      <div className="my-2">
        <nav aria-label="...">
          <div className="pagination flex-wrap pagination-sm justify-content-end">
            <button
              onClick={() => {
                page === 1 ? setPage(1) : setPage(page - 1);
                return page;
              }}
              className={
                page === 1
                  ? "disabled fw-bold mx-1 rounded-pill border border-primary border shadow"
                  : "page-link fw-bold mx-1 rounded-pill border border-dark border shadow"
              }
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number + 1)}
                className={
                  number === page
                    ? "page-item active mx-1 fw-bold mx-1 rounded-pill border border-primary border shadow"
                    : "fw-bold mx-1 rounded-pill border border-primary border shadow"
                }
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={() => {
                page === totalPages ? setPage(totalPages) : setPage(page + 1);
                return page;
              }}
              className={
                page === totalPages
                  ? "disabled fw-bold mx-1 rounded-pill border border-primary border shadow"
                  : "page-link fw-bold mx-1 rounded-pill border border-dark border shadow"
              }
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
