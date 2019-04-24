import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts/index";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises
  };
  render() {
    return (
      <Fragment>
        <Header />

        <Exercises />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
