import React from 'react';
import './css/inputArea.css';

export const InputArea: (props: any) => JSX.Element = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input value={todoText} onChange={onChange} placeholder="TODOを入力" />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
