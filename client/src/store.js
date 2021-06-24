import create from "zustand";
import { devtools } from "zustand/middleware";

// slices
import storySlice from "./slices/storySlice";
import emojiSlice from "./slices/emojiSlice";

// export to store
export const storyStore = create(devtools(storySlice));
export const emojiStore = create(devtools(emojiSlice));
