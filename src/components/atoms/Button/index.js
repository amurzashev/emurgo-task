import styled from '@emotion/styled';

export default styled.button`
  height: 48px;
  border: 2px solid ${props => props.theme.colors[props.color || 'primary']};
  border-radius: 3px;
  padding: ${props => props[props.padding] || '0 54px'};
  color: ${props => props.theme.colors[props.color || 'primary']};
  text-transform: uppercase;
  box-sizing: border-box;
  cursor: pointer;
`;
