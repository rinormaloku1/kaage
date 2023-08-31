import React, { Landing } from "react";
import Router from "next/router";

export default class Index extends Landing{
  componentDidMount = () => {
    Router.push("/landing");
  };

  render() {
    return <div />;
  }
}
