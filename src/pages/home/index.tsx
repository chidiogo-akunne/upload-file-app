import React, { useContext } from "react";
import Card from "../../components/card";
import Dropzone from "../../components/dropZone";
import { ThemeContext } from "../../context";
import Toggle from "../../components/darkModeToggle";

import { Container, Header, HeaderLeft, Text } from "./styles";

export default function Home() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const buttonColor = darkMode ? "rgb(0, 0, 0)" : "rgb(102 77 210";

  return (
    <Container
      style={{
        backgroundColor: darkMode ? "rgb(0, 0, 0)" : "rgba(36, 13, 133, 0.3)",
      }}
    >
      <Card>
        <Header>
          <HeaderLeft>
            <h1>upload files</h1>
          </HeaderLeft>
          <Toggle />
        </Header>
        <Text>Upload documents you want to share with your team</Text>
        <Dropzone buttonColor={buttonColor} />
      </Card>
    </Container>
  );
}
