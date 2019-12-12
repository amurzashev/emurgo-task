import styled from '@emotion/styled';

export default styled.div`
  padding: 0 120px;
  ${props => props.theme.breakpoints.tablet} {
    padding: 0 80px;
  }
  ${props => props.theme.breakpoints.mobile} {
    padding: 0 40px;
  }
`;
