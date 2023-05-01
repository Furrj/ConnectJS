import React from "react";
import styles from "./Block2.module.css";
import { ESide } from "../../utils/nodes";

//UTILS
import Connectable from "../Connectable";

const Block2: React.FC = () => {
  return (
    <Connectable nodes={[{ position: ESide.Left, connectTo: "block" }]}>
      <div id="block2" className={styles.block2}></div>
    </Connectable>
  );
};

export default Block2;
