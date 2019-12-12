import React from 'react';
import Fluid from 'components/organisms/Fluid';
import Caption from 'components/atoms/Caption';
import Button from 'components/atoms/Button';
import styled from '@emotion/styled';

const OuterWrap = styled.div`
  background: ${props => props.theme.colors.primary};
`;

const InnerWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  &:first-of-type {
    margin-right: 10px;
  }
`;

export default () => (
  <OuterWrap>
    <Fluid as="section" fullHeight>
      <InnerWrap>
        <Caption size="xxl" weight="bold" color="white">
          EMURGO Building a Global Cardano
        </Caption>
        <Caption size="xl" color="white" weight="bold">Test test</Caption>
        <Caption size="xl" color="white" weight="bold">By EMURGO</Caption>
        <ButtonsWrap>
          <StyledButton color="white">Learn More</StyledButton>
          <StyledButton color="white">Watch the video</StyledButton>
        </ButtonsWrap>
      </InnerWrap>
    </Fluid>
  </OuterWrap>
);
