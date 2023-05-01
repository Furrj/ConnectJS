import React from "react";
import styles from "./Line.module.css";

const Line: React.FC = () => {
  return (
    <svg className={styles.svg} width={"100vw"} height={"100vh"}>
      <line
        x1={"208"}
        y1={"200"}
        x2={"691"}
        y2={"200"}
        stroke={"black"}
        strokeWidth={"5px"}
      />
    </svg>
  );
};

export default Line;
