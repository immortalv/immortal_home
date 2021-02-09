import { init } from "@rematch/core";
import loadingPlugin from "@rematch/loading";
import { models } from "./models";

export const store = init({
  models,
  plugins: [loadingPlugin({})],
});

export const { dispatch } = store;
