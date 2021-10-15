import React from "react";
import { SpringSpinner } from "react-epic-spinners";

interface loaderProp {
  spinnerSize?: number;
}

export default function Loader(props: loaderProp) {
  const { spinnerSize } = props;
  //set spinner size depending on screen width
  let size = 40;
  let windowWidth = window.innerWidth;
  windowWidth > 700 ? (size = 70) : (size = 40);

  return <SpringSpinner color="rgb(102 77 210)" size={spinnerSize || size} />;
}
