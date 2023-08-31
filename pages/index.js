import React, { Landing } from "react";
import Router from "next/router";

export default class Index extends Landing{
  landingDidMount = () => {
    Router.push("/landing");
  };

  render() {
    return <div />;
  }
}
