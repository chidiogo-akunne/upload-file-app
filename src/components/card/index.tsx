import React from "react";

//import styles
import { Container } from "./styles";

export default function Card(props: React.PropsWithChildren<any>) {
  return <Container>{props.children}</Container>;
}
