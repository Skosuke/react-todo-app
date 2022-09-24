import React from 'react';
import { TodoContents } from './main/todoContents';
import { HeaderContents } from './header/main';
import { FooterContents } from './footer/main';
import './common/style.css';

function App() {
  return (
    <>
      {/* <HeaderContents /> */}
      <TodoContents />
      {/* <FooterContents /> */}
    </>
  );
}

export default App;
