import React, { Children, useEffect } from "react";
import { INode } from "../utils/nodes";

//PROPS
interface IProps {
  children: React.ReactNode;
  nodes: INode[];
}

export interface IChildInfo {
  id: string;
  width: number;
  height: number;
  xPosition: number;
  yPosition: number;
}

const Connectable: React.FC<IProps> = ({ children }) => {
  useEffect(() => {
    console.log(getChildInformation());
  }, []);

  function getChildInformation(): IChildInfo {
    //Grab child ID and get reference to it
    const childComp: any = Children.toArray(children)[0];
    const childID: string = childComp.props.id;
    const child: HTMLElement | null = document.querySelector(`#${childID}`);

    if (child) {
      return {
        id: childID,
        width: child.getBoundingClientRect().width,
        height: child.getBoundingClientRect().height,
        xPosition: child.getBoundingClientRect().x,
        yPosition: child.getBoundingClientRect().y,
      };
    } else {
      throw Error("Can't find child");
    }
  }

  return <div>{children}</div>;
};

export default Connectable;
