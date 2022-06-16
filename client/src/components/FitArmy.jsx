import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import ReviewCard from "./ReviewCard";
import { FaSortAmountDown } from "react-icons/fa";
import {  getTrainees } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const FitArmy = () => {
  const [sorted, setSorted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  //////////////////////////////////////////////////
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrainees());
  }, [dispatch]);

  return (
    <main>
      <div className="fit-army-container">
        <section className="fit-army-hero">
          <div className="fit-text">
            <span className="fit-header">
              Our family has 10,000 members <br />
            </span>
            <h1 className="fit-header-main">
              Join the <strong>#FitArmy</strong>
              <br />
              NOW
            </h1>
          </div>
        </section>
        <section className="fit-army-review">
          <h1 className="big-heading">Reviews</h1>
          <div className="review-btn-case">
            {!sorted && (
              <button className="sort-btn">
                <FaSortAmountDown />
                &nbsp;&nbsp;Sort By rating
              </button>
            )}
            {sorted && (
              <button className="sort-btn">
                <FaSortAmountDown />
                &nbsp;&nbsp;Sort By date
              </button>
            )}
          </div>
          <section className="review-list">
            {/* {currentData.map((entry) => ( */}
            {user.users &&
              user.users.map((user) => {
                return <ReviewCard user={user} key={user._id} />;
              })}

            {/* ))} */}
            <div className="page-btn-case">
              {prevPage >= 1 && <button className="page-btn">Prev</button>}
              <span className="page-btn page-now">
                &nbsp;&nbsp;{currentPage + 1}&nbsp;
              </span>
              {nextPage <= 4 && <button className="page-btn">Next</button>}
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default FitArmy;
