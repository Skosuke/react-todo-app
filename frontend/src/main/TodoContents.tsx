import React from 'react';

export const TodoContents = () => {
  return (
    <>
      <div className="todo-contents">
        <div className="input-area">
          <input placeholder="TODOを入力" />
          <button>追加</button>
        </div>
        <div className="incomplete-area">
          <p>未完了</p>
          <div>
            <div>aaaaaa</div>
            <div>aaaaaa</div>
            <div>aaaaaa</div>
          </div>
        </div>
        <div className="complete-area">
          <p>完了</p>
          <div>
            <div>bbbbbbb</div>
            <div>bbbbbbb</div>
            <div>bbbbbbb</div>
          </div>
        </div>
      </div>
    </>
  );
};
