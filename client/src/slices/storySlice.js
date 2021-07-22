import axios from "axios";
import { storyStore } from "../store";
import { emojiStore } from "../store";

const storySlice = (set) => ({
  // state
  emojis: null,
  title: null,
  genre: null,
  subGenre: null,
  text: null,
  richText: null,
  _id: null,
  // convert rich text to state and storing the values in our state
  getValues: (formData) => {
    const emojiArray = emojiStore.getState().emojis;
    set((state) => ({ emojis: emojiArray }));
    set(() => formData);
    const { text } = formData;
    const richText = text
      .replace(/[<>/{}]/g, "")
      .replace(/[&*[]]/g, "")
      .split("\n")
      .join("<p/> <p className='mt-xl'>");
    set((state) => ({ richText: `<p>${richText}</p> ` }));
  },
  // get subGenre
  getSubGenre: (value) => {
    set((state) => ({ subGenre: value }));
  },
  // send all the values to DB
  sendToDb: async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const currentStore = storyStore.getState();
    await axios.post(`/user/story/create`, currentStore, config);
  },

  updateStory: async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const currentStore = storyStore.getState();
    await axios.put(
      `/user/story/editStory/${currentStore._id}`,
      currentStore,
      config
    );
  },
});

export default storySlice;
