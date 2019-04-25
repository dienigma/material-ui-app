import React from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginBottom: 10
  }
};
export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.paper}>
        {exercises.map(([group, exercises]) => (
          <Typography
            variant="headline"
            style={{ textTransform: "capitalize" }}
          >
            {group}
          </Typography>
        ))}
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.paper}>Right Pane</Paper>
    </Grid>
  </Grid>
);
