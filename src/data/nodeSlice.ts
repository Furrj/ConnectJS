import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IChildInfo } from "../components/Connectable";

export interface NodeState {
  nodes: IChildInfo[];
}

const initialState: NodeState = {
  nodes: [],
};

export const nodeSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<IChildInfo>) => {
      state.nodes.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNode } = nodeSlice.actions;

export default nodeSlice.reducer;
