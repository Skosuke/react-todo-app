import React from 'react';
import './css/inCompleteArea.css';

export const IncompleteArea: (props: any) => JSX.Element = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  // console.log(incompleteTodos);
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <div className="lists">
        {incompleteTodos.map((todo: String, index: Number) => {
          return (
            <div className="list">
              <div>{todo}</div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
