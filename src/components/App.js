import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts/index";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

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

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    console.log(id);
    const temp = this.state.exercises.find(ex => ex.id === id);
    this.setState({
      exercise: temp
    });
  };

  render() {
    const exercises = this.getExercisesByMuscle(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />

        <Exercises
          exercise={this.state.exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
