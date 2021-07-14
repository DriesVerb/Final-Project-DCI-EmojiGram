import axios from "axios";

const emojiSlice = (set) => ({
  loading: true,
  emojis: [],
  getEmojis: async () => {
    // set(() => ({ loading: true }));
    set(() => ({ loading: true }));
    const res = await axios.get(`/emoji/story`);
    set(() => ({ emojis: res.data }));
    set(() => ({ loading: false }));
  },
});

export default emojiSlice;
