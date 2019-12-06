import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Description = styled.div`
  margin-left: 18px;
  padding: 12px;
`;

const Home = () => (
  <>
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
      `}
    >
      Hello world!
    </div>
    <Description>this is a description</Description>
  </>
);

export default Home;
