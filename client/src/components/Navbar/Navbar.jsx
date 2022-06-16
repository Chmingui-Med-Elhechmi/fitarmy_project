import React from "react";
import { useSelector } from "react-redux";
import NavbarUser from "./navbarUser";
import NavbarVistor from "./navbarVistor";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div style={{ height: "50px" }}>
      {user.isAuth ? <NavbarUser /> : <NavbarVistor />}
    </div>
  );
};

export default Navbar;
