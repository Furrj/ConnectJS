import { IChildInfo } from "../components/Connectable";

function calculateEndpoints(node1: IChildInfo, node2: IChildInfo) {
  switch (node1.node.position) {
    case Side.Right:
      calculateEndpointsHorizontal(node1, node2);
      break;
    case Side.Left:
      calculateEndpointsHorizontal(node2, node1);
      break;
    case Side.Bottom:
      calculateEndpointsVertical(node1, node2);
      break;
    case Side.Top:
      calculateEndpointsVertical(node2, node1);
      break;
  }
}

function calculateEndpointsHorizontal(
  node1: IChildInfo,
  node2: IChildInfo
): ILineInfo {
  const x1: number = node1.xPosition + node1.width;
  const x2: number = node2.xPosition;
  const y1: number = node1.yPosition + Math.round(node1.height / 2);
  const y2: number = y1;
  return { x1, x2, y1, y2 };
}

function calculateEndpointsVertical(
  node1: IChildInfo,
  node2: IChildInfo
): ILineInfo {
  const x1: number = node1.xPosition + Math.round(node1.xPosition / 2);
  const x2: number = x1;
  const y1: number = node1.yPosition + node1.height;
  const y2: number = node2.yPosition;
  return { x1, x2, y1, y2 };
}

export interface ILineInfo {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface INode {
  position: Side;
  connectTo: string;
}

export enum Side {
  Top,
  Bottom,
  Left,
  Right,
}
