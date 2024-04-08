import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChannelsState {
  selectedChannel?: number;
}

const initialState: ChannelsState = {};

const channelsSlice = createSlice({
  name: "channelsSlice",
  initialState,
  reducers: {
    setSelectedChannel: (state, action: PayloadAction<number>) => {
      state.selectedChannel = action.payload;
    },
  },
});

export const { setSelectedChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
