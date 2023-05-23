module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            app: "./app",
            components: "./components",
            constants: "./constants",
            assets: "./assets",
          },
        },
      ],
      require.resolve("expo-router/babel"),
    ],
  };
};
