module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-controls"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.find(
      rule => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/;

    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        "style-loader",
        "css-modules-typescript-loader",
        {
          loader: "css-loader",
          options: {
            modules: true
          }
        },
        'postcss-loader',
      ]
    });
    // Return the altered config
    return config;
  }
};
