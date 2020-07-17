import React from 'react';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }
  return (
    <div style={style}>
     {name === 'react' && <h1>리액트입니다.</h1>}
    </div>
  );
}

export default App;
