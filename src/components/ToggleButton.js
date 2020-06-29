import React from "react";
import styled from "styled-components";

const ToggleButton = ({ color, theme, onClickHandler }) => {
  const ButtonContainer = styled.div`
    display: block;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    background: ${color.btnBg};
    position: relative;
    cursor: pointer;
  `;

  const Button = styled.div`
    position: absolute;
    content: " ";
    height: 35px;
    width: 35px;
    background: ${color.btn};
    border-radius: 50%;
    z-index: 1;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    transform: translate(
      ${(props) => (props.theme === "light" ? "5px, 2.5px" : "40px, 2.5px")}
    );
  `;

  return (
    <ButtonContainer onClick={onClickHandler}>
      <Button theme={theme} />
    </ButtonContainer>
  );
};

export default ToggleButton;
