import React from "react";
import styles from "./Block.module.css";

//UTILS
import Connectable from "../Connectable";

const Block: React.FC = () => {
  return (
    <Connectable>
      <div id="block" className={styles.block}></div>
    </Connectable>
  );
};

export default Block;
