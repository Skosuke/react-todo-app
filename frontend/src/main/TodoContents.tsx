import React, { useState } from 'react';
import { InputArea } from './inputArea';
import { IncompleteArea } from './incompleteArea';
import { CompleteArea } from './completeArea';
import './css/todoContents.css';

export const TodoContents = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onTodoChangeText: (even: any) => void = (even) => {
    setTodoText(even.target.value);
  };

  const onClickAdd: any = () => {
    const newTodos: any = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete: any = (index: any) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete: any = (index: any) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos: any = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);

    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickrRetrun: any = (index: any) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  console.log(todoText);

  return (
    <>
      <div className="todo-contents">
        <InputArea
          todoText={todoText}
          onChange={onTodoChangeText}
          onClick={onClickAdd}
        />
        <IncompleteArea
          incompleteTodos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteArea
          completeTodos={completeTodos}
          onClickrRetrun={onClickrRetrun}
        />
      </div>
    </>
  );
};
