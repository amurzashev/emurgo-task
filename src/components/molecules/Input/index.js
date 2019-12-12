import React from 'react';

const renderInput = type => {
  switch(type) {
    case 'text':
      return 'text';
    case 'submit':
      return 'submit';
    default:
      throw new Error('Input must be on of [text, submit]')
  }
}

export default () => {

};
