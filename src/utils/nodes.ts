import { IChildInfo } from "../components/Connectable";

function calculateEndpoints(node1: IChildInfo, node2: IChildInfo) {}

export interface ILineInfo {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface INode {
  position: ESide;
  connectTo: string;
}

export enum ESide {
  Top,
  Bottom,
  Left,
  Right,
}
