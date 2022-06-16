import React from "react";
import { Link } from "react-router-dom";

const ExpertCard = ({ user }) => {
  return (
    <>
      <article className="expert">
        <div className="flex">
          <img
            src={user.avatar.imageURL}
            alt={user.firstName}
            className="expert-img"
          />
          <div className="expert-text-box">
            <div className="expert-bio">
              <span className="expert-name">{user.firstName} {user.lastName}</span>
              <span className="expert-sub">Speciality :  {user.speciality}</span>
              <span className="expert-sub">Gender: {user.gender} </span>
            </div>
            <div className="expert-detail">
              {user.firstName} {user.lastName}has a <em>qualification</em>{" "}
              degree and an assorted experiencce in the fitness industry for
              Contact the trainer via email : <strong>{user.email}</strong>.
              Contact the trainer via phone :{" "}
              <strong>{user.phoneNumber}</strong>.{" "}
              {user.gender === "femme" ? "She" : "He"} "work involves optimizing
              the calorie in-take and enhancing the metabolism which ensures a
              healthy body and a sharper mind." "is highly skilled and
              motivating when it comes to being a personal trainer."
              <h2>
                Contact information : <br />
              </h2>
              <h3>
                Email : {user.email} <br />
                Phone Number : {user.phoneNumber} <br />
              </h3>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Link to={`/staff/${user._id}`} className="expert-btn">
            read more
          </Link>
          <Link to={`/staff/${user._id}`} className="expert-btn">
            Reserve
          </Link>
        </div>
      </article>
    </>
  );
};

export default ExpertCard;
