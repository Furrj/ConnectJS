import React, { Children, useEffect } from "react";

//PROPS
interface IProps {
  children: React.ReactNode;
}

const Connectable: React.FC<IProps> = ({ children }) => {
  useEffect(() => {
    const childComp: any = Children.toArray(children)[0];
    const childID: string = childComp.props.id;
    const child: HTMLElement | null = document.querySelector(`#${childID}`);
    const childX: number | undefined = child?.getBoundingClientRect().x;
    const childY: number | undefined = child?.getBoundingClientRect().y;
    console.log(`${childID}: (${childX}, ${childY})`);
  }, []);

  return <div>{children}</div>;
};

export default Connectable;
