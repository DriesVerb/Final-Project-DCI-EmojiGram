import axios from "axios";

export const mainGenreSlice = (set) => ({
  loading: true,
  stories: [],
  getStoriesByGenre: async (input) => {
    const res = await axios.get(`/user/story/genre/${input}`);
    set(() => ({ stories: res.data }));
    set(() => ({ loading: false }));
  },
});
