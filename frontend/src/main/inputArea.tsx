import React from 'react';
import './css/inputArea.css';

export const InputArea = () => {
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" />
      <button>追加</button>
    </div>
  );
};
