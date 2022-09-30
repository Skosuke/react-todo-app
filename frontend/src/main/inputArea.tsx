import { FC } from 'react';
import './css/inputArea.css';

type InputAreaProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  todoText: string | number | readonly string[];
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean | undefined;
};

export const InputArea: FC<InputAreaProps> = ({
  todoText,
  onChange,
  onClick,
  disabled,
}) => {
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChange}
        placeholder="TODOを入力"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
