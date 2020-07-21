import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'koke' },
    { id: 2, text: 'saul' },
    { id: 3, text: 'llorente' },
    { id: 4, text: 'carrasco' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);

  const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
