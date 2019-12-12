import styled from '@emotion/styled';

const getFontSize = props => {
  switch (props.size) {
    default:
      return 16;
  }
};

const getFontWeight = props => {
  switch (props.weight) {
    default:
      return 'initial';
  }
};

export default styled.p`
  font-size: ${props => getFontSize(props)}px;
  font-weight: ${props => getFontWeight(props)};
  color: ${props => props.theme.colors[props.color] || 'black'};
`;
