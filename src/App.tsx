import React from 'react';
import {Layout} from "./components/layout/Layout";
import "./styles/global.scss"
import {Skills} from "./components/skills/Skills";

function App() {
  return (
      <Layout>
        <Skills/>
      </Layout>
  );
}

export default App;
