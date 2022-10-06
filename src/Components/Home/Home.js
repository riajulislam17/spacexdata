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

  const size = 12;
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

      {/* Pagination */}
      <div className="my-2">
        <nav aria-label="...">
          <div className="pagination pagination-sm justify-content-end">
            <button
              onClick={() => {
                page <= 1 ? setPage(1) : setPage(page - 1);
                return page;
              }}
              className={
                page === 1
                  ? "mx-1 rounded-pill px-3 py-1"
                  : "mx-1 rounded-pill px-3 py-1"
              }
              disabled={page <= 1}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number}
                onClick={() => {
                  setPage(number + 1);
                }}
                className={
                  number + 1 === page
                    ? "text-light fw-bold shadow bg-secondary mx-1 rounded-pill px-3 py-1"
                    : "mx-1 rounded-pill px-3 py-1"
                }
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={() => {
                page >= totalPages ? setPage(totalPages) : setPage(page + 1);
                return page;
              }}
              className={
                page === totalPages
                  ? "mx-1 rounded-pill px-3 py-1"
                  : "mx-1 rounded-pill px-3 py-1"
              }
              disabled={page >= totalPages}
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
