import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
	isSidebarCollapsed: boolean;
	isDarkMode: boolean;
};

const initialState: InitialState = {
	isSidebarCollapsed: false,
	isDarkMode: false,
};

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setIsSidebarCollapsed: (
			state,
			action: PayloadAction<InitialState["isSidebarCollapsed"]>,
		) => {
			state.isSidebarCollapsed = action.payload;
		},
		setIsDarkMode: (
			state,
			action: PayloadAction<InitialState["isDarkMode"]>,
		) => {
			state.isDarkMode = action.payload;
		},
	},
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
