import React from "react";
import { css } from '@emotion/react';

const dynamicStyle = bgColor => css`
  background-color: ${bgColor};
  padding :10px;
`;

const Services =  ({ bgColor })=> {
  return <>Services
    <h1>Services Page</h1>
    <div css ={dynamicStyle(bgColor)}>styled with Emotion</div>;
  </>;
};

export default Services;
