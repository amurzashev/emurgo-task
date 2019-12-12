import PropTypes from 'prop-types';

const renderInput = type => {
  switch (type) {
    case 'text':
      return 'text';
    case 'submit':
      return 'submit';
    default:
      throw new Error('Input must be on of [text, submit]'); // just in case
  }
};

const Input = ({ type }) => renderInput(type);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'submit']),
};
Input.defaultProps = {
  type: 'text',
};
export default Input;
