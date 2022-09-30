import React, { useState } from 'react';
import { InputArea } from './inputArea';
import { IncompleteArea } from './incompleteArea';
import { CompleteArea } from './completeArea';
import './css/todoContents.css';

export const TodoContents = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onTodoChangeText = (even: any): void => {
    setTodoText(even.target.value);
  };

  const onClickAdd = (): void => {
    if (todoText === '') return;
    const newTodos: any = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index: any): void => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index: any): void => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos: any = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);

    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickrRetrun = (index: any): void => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const disabledJugement = (): boolean => {
    console.log(incompleteTodos.length >= 2);
    return incompleteTodos.length >= 10;
  };

  return (
    <>
      <div className="todo-contents">
        <InputArea
          todoText={todoText}
          onChange={onTodoChangeText}
          onClick={onClickAdd}
          disabled={disabledJugement()}
        />
        {disabledJugement() && (
          <p style={{ color: 'red' }}>登録は10個までだよ</p>
        )}
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
