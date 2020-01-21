module.exports = {
  stories: ['../stories/**/*.stories.{js,mdx}'],
  addons: ['@storybook/addon-storysource'],
  esDevServer: {
    // custom es-dev-server options
    preserveSymlinks: true
  },
};
