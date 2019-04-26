import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Create from "../Exercises/Dialogs/Create";

export default props => (
  <AppBar position="static" style={{ background: "black" }}>
    <Toolbar>
      <Typography
        component="h2"
        variant="headline"
        color="inherit"
        style={{ flex: 1 }}
      >
        Exercise DB
      </Typography>
      <Create />
    </Toolbar>
  </AppBar>
);
