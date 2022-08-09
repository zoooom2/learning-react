import React from 'react';

const Alert = ({ condition, message }) => {
  return <section className={`alert alert-${condition}`}>{message}</section>;
};

export default Alert;
