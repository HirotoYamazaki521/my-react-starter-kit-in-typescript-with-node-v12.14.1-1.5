import React ,{ useRef, useEffect, useState, RefObject } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  // userStateで型を指定することで、valueの型を指定できる
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };


  // 初期値を設定 同じように型を指定できる
  const renderTimes = useRef<number>(0);

  // コンポーネントがレンダリングされたら動く処理
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  // nullの直後に!をつけることで、その直前のデータの方はnullではないということをTypeScriptに伝えることができる
  // これをnon-null assertion operaterという
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // ref.currentでinput要素を参照できる
    // ifでnullチェックを行うことで、nullの場合はfocusを呼び出さないようにする
    // const current = ref.current;
    // if (current != null) current.focus();

    ref.current.focus();
  };

  return (
  <div>
    <div>value: {value}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <div>This component was re-rendered {renderTimes.current} times!</div>
    {/* reactではrefの文字列は非推奨 */}
    <input ref = {ref} type = "text " />
    <button onClick={focusInput}>Click Me!</button>
  </ div>
  );
}

export default Counter;