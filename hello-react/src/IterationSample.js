import React from 'react';

const IterationSample = () => {
  const names = ['빨강', '초록', '파랑', '노랑'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
