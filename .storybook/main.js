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
    ).exclude = /\.scss$/;

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        'css-loader',
        "postcss-loader",
        "sass-loader"
      ]
    });
    // Return the altered config
    return config;
  }
};
