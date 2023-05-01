import React from "react";
import styles from "./Block.module.css";
import { ESide } from "../../utils/nodes";

//UTILS
import Connectable from "../Connectable";

const Block: React.FC = () => {
  return (
    <Connectable nodes={[{ position: ESide.Right, connectTo: "block2" }]}>
      <div id="block" className={styles.block}></div>
    </Connectable>
  );
};

export default Block;
