import React from 'react';
import './css/completeArea.css';

export const CompleteArea = (props: any) => {
  const { completeTodos, onClickrRetrun } = props;
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <div className="lists">
        {completeTodos.map((todo: String, index: Number) => {
          return (
            <div className="list">
              <div>{todo}</div>
              <button onClick={() => onClickrRetrun(index)}>戻す</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
