import React, { useEffect } from "react";
import "./style.css";
import {
  getCoaches,
  getTrainees,
  deleteUser,
  getUsers,
} from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  //////////////////////////////////////////////////
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCoaches());
    dispatch(getUsers());
  }, [dispatch]);

  // delete user
  const handleDeleteUser = (e, userID) => {
    console.log(userID);
    dispatch(deleteUser({ id: userID }));
  };
  return (
    <div className="dash">
      <div class="wrapper">
        <nav>
          <header>
            <span></span>
            John Doe
            <a></a>
          </header>

          <ul>
            <li>
              <span>Navigation</span>
            </li>
            <li>
              <a class="active">Dashboard</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Roadmap</a>
            </li>
            <li>
              <a>Milestones</a>
            </li>
            <li>
              <a>Tickets</a>
            </li>
            <li>
              <a>GitHub</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <span>Other</span>
            </li>
            <li>
              <a>Search</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </nav>

        <main>
          <h1>Flexbox Admin Template</h1>

          <div class="flex-grid">
            <div>
              <h2>Add new Product</h2>
              <ul>
                <li>
                  {" "}
                  Product name
                  <input
                    type="text"
                    name="title"
                    placeholder="Product name"
                  />{" "}
                </li>
                <li>
                  {" "}
                  Product description
                  <input
                    type="text"
                    name="desc"
                    placeholder="Product description"
                  />{" "}
                </li>
                <li>
                  {" "}
                  Price DT
                  <input type="text" name="price" placeholder="Price DT" />{" "}
                </li>
                <li>
                  {" "}
                  Product Quantity
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Product Quantity"
                  />{" "}
                </li>
                <li>
                  {" "}
                  Product expiration date{" "}
                  <input
                    type="text"
                    name="expDate"
                    placeholder="Product expiration date"
                  />{" "}
                </li>
                <button>ADD</button>
              </ul>
            </div>
            <div>
              <h2>Products List</h2>
              <ul>
                <li>no images</li>
                <li>no extra retina sprites</li>
              </ul>
            </div>
            <div>
              <h2>Another List</h2>
              <ul>
                <li>no headache </li>
              </ul>
            </div>
          </div>

          <div class="flex-grid">
            <div>
              <h2>Users List</h2>
              <table style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td>id</td>

                  <td>First Name</td>
                  <td>Last Name</td>
                  <td>Email</td>
                  <td>delete user</td>
                </tr>

                {user.users &&
                  user.users.map((user) => {
                    return (
                      <tr>
                        <td>{user._id}</td>

                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                          {" "}
                          <button
                            onClick={(e) => {
                              handleDeleteUser(e, user._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </table>{" "}
            </div>

            <div>
              <h2>Coaches List</h2>
              <table style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td>Nom</td>
                  <td>Prénom</td>
                  <td>Age</td>
                  <td>Mail</td>
                </tr>
                <tr>
                  <td>Giraud</td>
                  <td>Pierre</td>
                  <td>28</td>
                  <td>pierre.giraud@edhec.com</td>
                </tr>
                <tr>
                  <td>Joly</td>
                  <td>Pauline</td>
                  <td>27</td>
                  <td>pjl@gmail.com</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="flex-grid">
            <div>
              <h2>Trainees list</h2>
              Some Content
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
