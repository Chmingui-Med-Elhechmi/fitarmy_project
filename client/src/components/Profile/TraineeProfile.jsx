import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { GrSchedules } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { deleteUser, getUser, updateUser } from "../../redux/userSlice";
import "./style.css";
import { useHistory } from "react-router-dom";

const TraineeProfile = () => {
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);
  ////////////////////User///////////////////////
  //update
  const [updatedInfo, setUpdatedInfo] = useState();
  const handleUpdate = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };
  const handleUpdateSubmit = (e, userId) => {
    e.preventDefault();
    dispatch(updateUser({ id: userId, data: updatedInfo }));
  };

  // delete user
  const handleDeleteUser = (e, userID) => {
    console.log(userID);
    dispatch(deleteUser({ id: userID }));
  };
  ////////
  const linkStyle = {
    textDecoration: "inherit",
  };
  return (
    <>
      <div className="profile">
        <div className="main">
          <div className="glass">
            {/* SECTION 1 */}
            <div className="dashboard">
              <div className="user">
                <img
                  id="profile-avatar-profile"
                  src={user.userInfo.avatar.imageURL}
                  alt=""
                />
                <h3>{user.user.firstName}</h3>
                <h3>{user.user.lastName}</h3>
                <p>{user.user.role}</p>
                <input
                  type="file"
                  name="avatar"
                  //   onChange={(e) => handleUpdateImage(e, user.userInfo._id)}
                  style={{ fontSize: "12px" }}
                  className="upload"
                />
                <span>Edit Avatar</span>
              </div>
              <div className="seperator"></div>
              <div className="links">
                <div className="link">
                  <AiOutlineShoppingCart />
                  <label className="tab-label" htmlFor="rd1">
                    See your cart here{" "}
                  </label>
                </div>
                <div className="link">
                  <GrSchedules />
                  <label className="tab-label" htmlFor="rd5">
                    See your Todo List{" "}
                  </label>
                </div>
              </div>
              <Link to={{ pathname: "/blog/newPost" }} style={linkStyle}>
                <div className="pro">
                  <h2>Write with us</h2>
                  <img
                    src="https://static.thenounproject.com/png/214735-200.png"
                    alt=""
                  />
                </div>
              </Link>
              <div className="seperator"></div>
              <button
                className="delete-btn"
                onClick={(e) => {
                  handleDeleteUser(e, user.userInfo._id);
                  history.push("/");
                }}
              >
                Delete Account
              </button>
            </div>
            {/* SECTION 2 */}
            <div className="user-info">
              <h1>Edit informations</h1>
              <div className="profile-cards">
                <div className="profile-card">
                  <p>First Name</p>
                  <input
                    name="firstName"
                    type="text"
                    defaultValue={user.user.firstName}
                    onChange={handleUpdate}
                  />
                </div>
                <div className="profile-card">
                  <p>Last Name</p>

                  <input
                    name="lastName"
                    type="text"
                    defaultValue={user.user.lastName}
                    onChange={handleUpdate}
                  />
                </div>
                <div className="profile-card">
                  <p>Email</p>
                  <input
                    name="email"
                    type="text"
                    readOnly
                    defaultValue={user.user.email}
                  />
                </div>
                <div className="profile-card">
                  <p>Age</p>

                  <input
                    type="text"
                    onChange={handleUpdate}
                    name="age"
                    defaultValue={user.user.age}
                  />
                </div>
                <div className="profile-card">
                  <p className="gender">Gender</p>
                  <select
                    name="gender"
                    defaultValue={user.userInfo.gender}
                    onChange={handleUpdate}
                  >
                    <option value="">Choose...</option>
                    <option value="homme">Male</option>
                    <option value="femme">Female</option>
                  </select>
                </div>
                <div className="profile-card">
                  <p>Specility</p>
                  <input
                    type="text"
                    defaultValue={user.user.speciality}
                    name="speciality"
                    onChange={handleUpdate}
                  />
                </div>
                <div className="profile-card">
                  <p>Phone Number</p>
                  <input
                    type="text"
                    defaultValue={user.user.phoneNumber}
                    name="phoneNumber"
                    onChange={handleUpdate}
                  />
                </div>
              </div>
              <button
                className="submit-btn"
                style={{ width: "160px", margin: "0px auto 15px auto" }}
                onClick={(e) => handleUpdateSubmit(e, user.user._id)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraineeProfile;
