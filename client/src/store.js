import create from "zustand";
import { devtools } from "zustand/middleware";

// slices
import storySlice from "./slices/storySlice";

// export to store
export const storyStore = create(devtools(storySlice));
