import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts/index";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";
import Grid from "@material-ui/core/Grid";

export default class extends Component {
  state = {
    exercises,
    exercise: ""
  };

  getExercisesByMuscle = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    console.log(id);
    const temp = this.state.exercises.find(ex => ex.id === id);
    this.setState({
      exercise: temp
    });
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscle(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Grid container>
          <Header
            muscles={muscles}
            onExerciseCreate={this.handleExerciseCreate}
          />

          <Exercises
            exercise={this.state.exercise}
            exercises={exercises}
            category={category}
            onSelect={this.handleExerciseSelect}
          />
        </Grid>
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
