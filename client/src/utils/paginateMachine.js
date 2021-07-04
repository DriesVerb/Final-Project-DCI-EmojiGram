import { createMachine, assign } from "xstate";

export const paginateMachine = (data, perPage) =>
  createMachine({
    id: "paginateMachine",
    initial: "loading",
    context: {
      data: [],
      perPage: 2,
    },
    states: {
      loading: {
        invoke: {
          id: "dataLoader",
          src: (context, _event) => {
            return (callback, _onEvent) => {
              const { data, perPage } = context;
              const newData = data.slice(data.length, data.length + perPage);
              const hasMore = newData.length === perPage;

              if (hasMore) {
                callback({ type: "DONE_MORE", newData });
              } else {
                callback({ type: "DONE_COMPLETE", newData });
              }
            };
          },
        },
        // on: {
        //   DONE_MORE: {
        //     transition: "more",
        //     actions: assign({
        //       data: ({ context }, { newData = [] }) => [...data, ...newData],
        //     }),
        //   },
        //   DONE_COMPLETE: {
        //     transition: "complete",
        //     actions: assign({
        //       data: ({ context }, { newData = [] }) => [...data, ...newData],
        //     }),
        //   },
        //   FAIL: "failure",
        // },
      },
      more: {
        on: {
          LOAD: "loading",
        },
      },
      complete: {
        type: "final",
      },
      failure: {
        type: "final",
      },
    },
  });
