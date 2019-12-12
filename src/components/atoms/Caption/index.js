import styled from '@emotion/styled';

const getFontSize = props => {
  switch (props.size) {
    case 's':
      return 12;
    case 'm':
      return 14;
    case 'l':
      return 16;
    case 'xl':
      return 18;
    case 'xxl':
      return 20;
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
  margin: 0;
`;
