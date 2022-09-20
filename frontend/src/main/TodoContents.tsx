import React from 'react';
import { InputArea } from './inputArea';
import { IncompleteArea } from './incompleteArea';
import { CompleteArea } from './completeArea';

export const TodoContents = () => {
  return (
    <>
      <div className="todo-contents">
        <InputArea />
        <IncompleteArea />
        <CompleteArea />
      </div>
    </>
  );
};
