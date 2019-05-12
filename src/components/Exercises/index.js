import React, { Fragment } from "react";
import { Grid, Paper, Typography, List, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Delete } from '@material-ui/icons'



const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};
export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome",
    description = "Please select an exercise from the left"
  },
  onDelete
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ title, id }) => (
                  <ListItem button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={()=>onDelete(id)}>
                        <Delete/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.paper}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" styles={{ marginTop: 50 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
