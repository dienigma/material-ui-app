import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

export default ({ muscles }) => (
  <div>
    <AppBar position="static" color="default">
      <Tabs
        value={0}
        // onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} />
        ))}
      </Tabs>
    </AppBar>
  </div>
);
