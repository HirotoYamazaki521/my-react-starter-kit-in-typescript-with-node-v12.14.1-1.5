import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// このように書くことで、JSXの要素の型を取得できる
// type Foo = JSX.IntrinsicElements;

ReactDOM.render(
  <App message ="Hello, React!" />,
  document.getElementById('root')
);
