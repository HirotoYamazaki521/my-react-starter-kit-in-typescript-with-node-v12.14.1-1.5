import React, { useReducer } from 'react';
import App from './App';

type StateType = { count: number}

const initialState: StateType = {count: 0};

type ActionType = { type: 'decrement' | 'increment' | 'reset'};

// reducer関数
// 戻り値がない時はnever型を指定する
function reducer(state: StateType, action: ActionType): StateType | never{
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

// Counterコンポーネント
// コンポーネントの名前はファイル名と同じにしたほうが保守性が高い
function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </>
  );
}

export default CounterWithReducer;

