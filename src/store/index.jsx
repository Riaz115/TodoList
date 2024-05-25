import { configureStore } from "@reduxjs/toolkit";

import ForTodo from "./ForCreateSlice";

export const store = configureStore({
  reducer: {
    Todo: ForTodo,
  },
});
