import React from 'react';
import styled from '@emotion/styled';
import Fluid from '../Fluid';

const Wrapper = styled(Fluid)`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export default () => (
  <Wrapper as="nav">
    <p>LOGO</p>
    <p>MENU</p>
  </Wrapper>
);
