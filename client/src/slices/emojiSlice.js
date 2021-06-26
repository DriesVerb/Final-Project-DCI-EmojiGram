import axios from "axios";

const emojiSlice = (set) => ({
  loading: true,
  emojis: [],
  getEmojis: async () => {
    const res = await axios.get(`/emoji/story`);
    set(() => ({ emojis: res.data }));
    set(() => ({ loading: false }));
  },
});

export default emojiSlice;
