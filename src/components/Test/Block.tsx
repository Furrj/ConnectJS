import React from "react";
import styles from "./Block.module.css";
import { Side } from "../../utils/generateLine";

//UTILS
import Connectable from "../Connectable";

const Block: React.FC = () => {
  return (
    <Connectable node={{ position: Side.Right, connectTo: "block2" }}>
      <div id="block" className={styles.block}></div>
    </Connectable>
  );
};

export default Block;
