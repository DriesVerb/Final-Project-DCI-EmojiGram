import axios from "axios";

const storySlice = (set) => ({
  emojis: [],
  title: null,
  genre: null,
  text: null,
  newText: null,
  getValues: async (formData) => {
    set((state) => formData);

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    await axios.post(`/user/story/create`, formData, config);
  },
  convertText: (input) => {
    const change = input.split("\n").join("<p/><p>");
    set((state) => ({ newText: `<p>${change}</p>` }));
  },
});

export default storySlice;
