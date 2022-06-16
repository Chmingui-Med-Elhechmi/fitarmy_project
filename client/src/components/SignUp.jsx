import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, register, clearErrors, loginErrors } from "../redux/userSlice";

const SignUp = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({});

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userInput);

    dispatch(register(userInput));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userInput));
  };
  //
  const history = useHistory();
  const user = useSelector((state) => state.user);
  //   const { error } = useSelector((state) => state.error)
  useEffect(() => {
    dispatch(clearErrors());
    if (user.isAuth) {
      history.push("/");
    } else {
      history.push("/register");
    }
  }, [user.isAuth, history, dispatch]);

  const reg = (
    <form className="register-form" autoComplete={"off"}>
      <div className="gridy">
        <input
          type="text"
          placeholder="*First Name"
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="*Last Name"
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="*Email Address"
          autoComplete="off"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="gridy">
        <input
          type="password"
          placeholder="*Password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="*Age"
          name="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="*Phone"
          name="phoneNumber"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange}>
          <option value="" name="role">
            Gender...
          </option>
          <option value="homme">Male</option>
          <option value="femme">Female</option>
        </select>
        <select name="role" onChange={handleChange}>
          <option value="" name="role">
            Speciality...
          </option>
          <option value="Trainee">Trainee</option>
          <option value="Coach">Coach</option>
        </select>
        <button className="register-btn" type="submit" onClick={handleRegister}>
          Join Now
        </button>
      </div>
    </form>
  );
  const log = (
    <form className="log-form" autoComplete={"off"}>
      <div className="gridy">
        <input
          type="email"
          placeholder="*Email Address"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button className="register-btn" onClick={handleLogin}>
          Log In
        </button>
        <h1>sdfgsdfg</h1>
        {/* {error ? <>{error}</> : <></>} */}
      </div>
    </form>
  );
  return (
    <main>
      {/* <Navbar /> */}

      <div className="register-content">
        <button className="sign-toggle-box">
          <span
            className={`sign-toggle sign-toggle-${hasAccount}`}
            onClick={() => setHasAccount(!hasAccount)}
          ></span>
        </button>
        {hasAccount ? log : reg}
      </div>

      <Footer />
    </main>
  );
};

export default SignUp;
