import React from "react";
import styles from "./App.module.css";

//COMPS
import Block from "./components/Test/Block";
import Block2 from "./components/Test/Block2";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Block />
      <Block2 />
    </div>
  );
};

export default App;
