import React from 'react';
import { TodoContents } from './main/TodoContents';
import { HeaderContents } from './header/header';
import { FooterContents } from './footer/footer';

function App() {
  return (
    <>
      <HeaderContents />
      <TodoContents />
      <FooterContents />
    </>
  );
}

export default App;
