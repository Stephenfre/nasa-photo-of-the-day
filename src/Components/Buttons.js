import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    height: 30px;
     border: 0;
    margin: 5px 10px;
    ${props => (props.type === "primary" ? `background: grey` : null)}
    ${props => (props.type === "primary" ? `color: white` : null)}
    ${props => (props.type === "secondary" ? `background: grey` : null)}
    ${props => (props.type === "secondary" ? `color: white` : null)}
    }
  `;

export default Button;
