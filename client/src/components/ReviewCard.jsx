import React from "react";
import StarRatingComponent from "react-star-rating-component";

const ReviewCard = ({ date, user }) => {
  
  return (
    <>
          <article className="review-card">
            <img className="review-img" src={user.avatar.imageURL} alt={user.firstName} />
            <div className="review-text">
              <h2 className="review-name">{user.firstName}</h2>
              <h3 className="review-name">{user.lastName}</h3>
              <div className="review-desc">
                <span className="review-rating" title={`65 out of 5`}>
                  <StarRatingComponent
                    name="rating"
                    editing={false}
                    onStarClick={() => null}
                  />
                </span>
                <span className="review-muted" style={{ fontSize: "20px" }}> 
                  Gender : {user.gender}
                </span>
              </div>
              <p className="review-content" style={{ fontSize: "23px" }}>
                Speciality : <b>{user.speciality} </b>
              </p>
              <p className="review-content">
                Phone Number : <b>{user.phoneNumber} </b>
              </p>
              <p className="review-content">
                Email : <b>{user.email} </b>
              </p>
            </div>
          </article>;
       
    </>
  );
};

export default ReviewCard;
