import React from "react";
import { Grid, Paper } from "@material-ui/core";
const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginBottom: 10
  }
};
export default props => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.paper}>Left Pane</Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.paper}>Right Pane</Paper>
    </Grid>
  </Grid>
);
