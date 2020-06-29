import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import ToggleButton from "./components/ToggleButton";
import { theme } from "./theme";

function App() {
  const [curTheme, setCurTheme] = useState("light");
  const [themeData, setThemeData] = useState(theme.light);
  const Hero = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${themeData.bg};
    color: ${themeData.mainText};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;
  const HeadingText = styled.h1`
    font-size: 3rem;
    text-shadow: 3px 3px 3px gray;
  `;

  const RightTop = styled.div`
    position: absolute;
    right: 5%;
    top: 5%;
  `;

  const themeSwitchHandler = () => {
    if (curTheme === "light") {
      setCurTheme("dark");
      setThemeData(theme.dark);
    } else if (curTheme === "dark") {
      setCurTheme("light");
      setThemeData(theme.light);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Hero>
        <HeadingText> Hello World! </HeadingText>
        <RightTop>
          <ToggleButton
            theme={curTheme}
            color={themeData}
            onClickHandler={themeSwitchHandler}
          />
        </RightTop>
      </Hero>
    </ThemeProvider>
  );
}

export default App;
