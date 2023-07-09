import { configureStore } from "@reduxjs/toolkit";

import { userCoreApi } from "./services/userCore";

export default configureStore({
  reducer: {
    [userCoreApi.reducerPath]: userCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userCoreApi.middleware),
  // devTools: true,
});
