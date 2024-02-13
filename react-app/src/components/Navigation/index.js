import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import calc from "../../assets/calc.png"
import "../Styles/styles.css";
function Navigation({ isLoaded }) {
  const currentUser = useSelector((state) => state.session.user);
  const profileURL = `/profile/${currentUser?.id}`;

  return (
    isLoaded && (
      <div className="nav-container">
        {" "}
        <div id="nav-logo-container" className="nav-flex-items">
          <div className="nav-div-1">
            {" "}
            <NavLink exact to="/" id="nav-logo">
              <img
              src={calc}
                alt="A blue 2-dimensional calculator with the word custom written in digital text on the screen"
                id="nav-logo"
              />
            </NavLink>
            <NavLink
              exact
              to="/discover"
              id="nav-discover"
              style={{ textDecoration: "none" }}
            >
              <h3>Discover</h3>
            </NavLink>
          </div>
        </div>
        <NavLink exact to="/" className="nav-flex-items" id="nav-title-link">
          <h1 id="nav-title" style={{ textDecoration: "none" }}>
            Custom Calc
          </h1>
        </NavLink>
        <div id="Nav-buttons-container" className="nav-flex-items">
          <div id='nav-div-2'>
               {currentUser ? (
            <>
              <NavLink exact to={profileURL} >
                <h3 style={{ textDecoration: "none" }}>
                  Profile
                </h3>

              </NavLink>
              <NavLink exact to="/" >
                <h3 style={{ textDecoration: "none" }}>My Calculators</h3>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink exact to="/login" style={{ textDecoration: "none", color: 'black' }}>
                Log in
              </NavLink>
              <NavLink exact to="/signup" style={{ textDecoration: "none", color: 'black' }}>
                Sign Up
              </NavLink>
            </>
          )}
          <ProfileButton user={currentUser} />
          </div>

        </div>
      </div>
    )
  );
}

export default Navigation;
