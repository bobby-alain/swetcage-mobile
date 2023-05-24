module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: true,
          allowUndefined: true,
        },
      ],
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
    ],
  };
};
