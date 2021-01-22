import React from "react";
import Header from "../shared/Header";
import "../../styles/main.scss";

const BaseLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default BaseLayout;
