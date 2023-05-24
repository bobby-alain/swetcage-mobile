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
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
        },
      ],
      require.resolve("expo-router/babel"),
    ],
  };
};
