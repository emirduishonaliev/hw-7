import React from "react";
import styled from "styled-components";

export const Button = ({ title, onClick, bgColor, color, brRadius }) => {
  return (
    <StyledButton
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: color, borderRadius: brRadius }}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 18px;
  gap: 10px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    background-color: #600a87;
  }
  &:active {
    background-color: #520b73;
  }
`;
