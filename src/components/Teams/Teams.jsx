import React from "react";
import InfoContainer from "./Info/InfoContainer";
import classes from "./Teams.module.css";

const Teams = (props) => {

  return (
    <div className={classes.background}>
      <h2>Teams</h2>
      <InfoContainer />
    </div>
  );
};

export default Teams;
